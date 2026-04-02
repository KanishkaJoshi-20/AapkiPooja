require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const OpenAI = require('openai');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from the frontend
    methods: ['POST', 'GET'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Meta variables removed - relying on Chatfuel connection
// Cache product data
let products = [];
const loadProducts = () => {
    try {
        products = require('../src/data/products.json');
        console.log(`Loaded ${products.length} products from the frontend JSON.`);
    } catch (err) {
        console.error("Error loading frontend products.json:", err);
    }
}
loadProducts();

const getOpenAIResponse = async (message) => {
    const productsContext = products.map((p) => {
        return `id: ${p.id}, name: ${p.name}, price: ${p.price}, description: ${p.description || p.category}`;
    }).join('\n');

    const systemPrompt = `You are a helpful customer support assistant for AadkiPooja, an e-commerce store. 
Your goal is to answer customer questions about products accurately based on the store's inventory.
Here is the current product list (prices, descriptions, categories):
${productsContext}

Guidelines:
Guidelines:
- You MUST ALWAYS provide the frontend link for any product you mention!
- Format the link exactly like this: http://localhost:5173/product/[id] (replace [id] with the actual id from the list).
- Example: "You can view it here: http://localhost:5173/product/1"
- CRITICAL: Do NOT use markdown brackets or parentheses for links. Output the raw plain URL text only.
- Provide the price and a brief description.
- If the user asks for a product not in the list, state that it's currently unavailable.
- Respond naturally as a store assistant.`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
      temperature: 0.7,
      max_tokens: 150,
    });
    
    return response.choices[0].message.content.trim();
}

// ----------------------------------------------------
// GENERIC API ENDPOINT (For Make.com / Zapier)
// ----------------------------------------------------

app.post('/api/chat', async (req, res) => {
  // Make.com HTTP module will send the text in the body
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: "No message provided" });
  }

  console.log(`Received incoming message: ${userMessage}`);

  try {
    // Generate AI response using OpenAI
    const aiReply = await getOpenAIResponse(userMessage);

    // Return the response as JSON so Make.com can parse it
    res.json({ reply: aiReply });
    console.log("Sent AI reply back to external webhook");
    
  } catch (err) {
    console.error("Error processing AI reply:", err);
    res.status(500).json({ error: "Failed to generate AI response" });
  }
});

app.listen(port, () => {
  console.log(`Meta Webhook server listening at http://localhost:${port}`);
  console.log(`Verification GET URL: http://localhost:${port}/webhook`);
});
