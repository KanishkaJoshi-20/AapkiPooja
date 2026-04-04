import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
import axios from 'axios';
import { fileURLToPath } from 'url';

// Setup __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Load product data from frontend JSON
let products = [];
const loadProducts = () => {
  try {
    const productsPath = path.resolve(__dirname, '../src/data/products.json');
    const raw = fs.readFileSync(productsPath, 'utf8');
    products = JSON.parse(raw);
    console.log(`Loaded ${products.length} products from the frontend JSON.`);
  } catch (err) {
    console.error('Error loading frontend products.json:', err);
    products = [];
  }
};
loadProducts();

const getOpenAIResponse = async (message) => {
  const productsContext = products
    .map((p) => `id: ${p.id}, name: ${p.name}, price: ${p.price}, description: ${p.description || p.category}`)
    .join('\n');

  const systemPrompt = `You are a helpful customer support assistant for AadkiPooja, an e-commerce store.\nYour goal is to answer customer questions about products accurately based on the store's inventory.\nHere is the current product list (prices, descriptions, categories):\n${productsContext}\n\nGuidelines:\n- You MUST ALWAYS provide the frontend link for any product you mention!\n- Format the link exactly like this: http://localhost:5173/product/[id] (replace [id] with the actual id from the list).\n- Example: "You can view it here: http://localhost:5173/product/1"\n- CRITICAL: Do NOT use markdown brackets or parentheses for links. Output the raw plain URL text only.\n- Provide the price and a brief description.\n- If the user asks for a product not in the list, state that it's currently unavailable.\n- Respond naturally as a store assistant.`;

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: message },
    ],
    temperature: 0.7,
    max_tokens: 300,
  });

  return response.choices?.[0]?.message?.content?.trim() ?? '';
};

// Health endpoint
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', products: products.length });
});

// Chat endpoint used by the frontend
app.post('/api/chat', async (req, res) => {
  const userMessage = req.body?.message;
  if (!userMessage) return res.status(400).json({ error: 'No message provided' });

  try {
    const aiReply = await getOpenAIResponse(userMessage);
    return res.json({ reply: aiReply });
  } catch (err) {
    console.error('Error generating AI reply:', err);
    return res.status(500).json({ error: 'Failed to generate AI response' });
  }
});

// Basic webhook verification endpoint (Facebook/IG)
app.get('/webhook', (req, res) => {
  const VERIFY_TOKEN = process.env.WEBHOOK_VERIFY_TOKEN || 'verify_token';
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token) {
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('Webhook verified');
      return res.status(200).send(challenge);
    } else {
      console.log('Webhook verification failed');
      return res.sendStatus(403);
    }
  }
  res.sendStatus(200);
});

// Inbound webhook for Instagram/Facebook messages (basic)
app.post('/webhook', async (req, res) => {
  try {
    console.log('Incoming webhook body:');
    console.dir(req.body, { depth: null });

    const entry = req.body.entry?.[0];
    const messaging = entry?.messaging?.[0];

    if (!messaging?.message?.text) return res.sendStatus(200);

    const userMessage = messaging.message.text;
    const senderId = messaging.sender.id;

    const aiReply = await getOpenAIResponse(userMessage);

    await axios.post(
      `https://graph.facebook.com/v22.0/me/messages`,
      {
        recipient: { id: senderId },
        message: { text: aiReply },
      },
      {
        params: { access_token: process.env.IG_ACCESS_TOKEN },
      }
    );

    return res.sendStatus(200);
  } catch (err) {
    console.error('Webhook error:', err.response?.data || err.message || err);
    return res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Meta Webhook server listening at http://localhost:${port}`);
  console.log(`Verification GET URL: http://localhost:${port}/webhook`);
});

