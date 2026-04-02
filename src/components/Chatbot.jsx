import React, { useState, useEffect, useRef } from 'react';

const INITIAL_MESSAGES = [
  { id: 1, role: 'bot', content: 'Namaste! Welcome to Aapki Pooja. How can I assist you with our heritage collections today?' }
];

const DUMMY_RESPONSES = [
  "That's a great question! Our artisan team handcrafts each piece.",
  "I'd recommend checking out our newly arrived silk collections.",
  "Shipping usually takes 7-10 business days for embroidered items.",
  "Yes, pure mulberry silk is used in our signature pieces.",
  "I can certainly help you find the right size. Check our size guide on the product page!"
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [mounted, setMounted] = useState(false);
  const messagesEndRef = useRef(null);

  // Delay-mount the FAB for a nice entrance
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Render message content with clickable URLs.
  // - Strips trailing punctuation from URLs (so links like ".../product/x." won't include the dot)
  // - Internal product URLs open in a new tab so the SPA can load the product page
  const renderMessageContent = (text) => {
    if (!text) return null;
    // split by URL while keeping URLs in the result
    const urlPattern = /(https?:\/\/[^\s]+)/;
    const parts = text.split(urlPattern);
    return parts.map((part, idx) => {
      if (urlPattern.test(part)) {
        // remove trailing punctuation commonly appended by sentences
        const cleaned = part.replace(/[.,)]+$/g, '');
        const trailing = part.slice(cleaned.length);

        // try to parse the URL to decide if it's an internal product link
        let isInternalProduct = false;
        let pathname = '';
        try {
          const urlObj = new URL(cleaned);
          pathname = urlObj.pathname + urlObj.search + urlObj.hash;
          // treat as internal product link if path starts with /product/
          if (pathname.startsWith('/product/')) isInternalProduct = true;
        } catch (err) {
          // not a fully qualified URL (shouldn't happen since regex matches http://), fallback
        }

        if (isInternalProduct) {
          // open internal product links in a new tab so the SPA loads the correct product
          return (
            <span key={idx} className="break-words">
              <a href={cleaned} target="_blank" rel="noopener noreferrer" className="underline text-primary/90">
                {cleaned}
              </a>
              {trailing}
            </span>
          );
        }

        return (
          <a
            key={idx}
            href={cleaned}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-primary/90 break-words"
          >
            {cleaned}
          </a>
        );
      }
      return <span key={idx}>{part}</span>;
    });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [messages, isOpen, isTyping]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setHasUnread(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: inputValue.trim()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response delay
    // Send to backend AI endpoint which has access to the inventory
    (async () => {
      try {
        // allow overriding API base in Vite env: VITE_API_BASE
        const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000';
        const resp = await fetch(`${API_BASE}/api/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userMessage.content })
        });

        if (!resp.ok) throw new Error(`Server returned ${resp.status}`);

        const data = await resp.json();
        const botText = data?.reply || 'Sorry, I could not get a response right now.';

        const botMessage = {
          id: Date.now() + 1,
          role: 'bot',
          content: botText
        };

        setMessages((prev) => [...prev, botMessage]);
      } catch (err) {
        console.error('Chatbot error:', err);
        const errorMsg = {
          id: Date.now() + 1,
          role: 'bot',
          content: 'Sorry, I\'m having trouble reaching the assistant right now. Please try again later.'
        };
        setMessages((prev) => [...prev, errorMsg]);
      } finally {
        setIsTyping(false);
        if (!isOpen) setHasUnread(true);
      }
    })();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Chat Window Component */}
      <div 
        className={`pointer-events-auto bg-surface-container-lowest w-[320px] md:w-[380px] h-[500px] max-h-[80vh] rounded-2xl shadow-2xl flex flex-col mb-4 border border-outline-variant/20 transition-all duration-300 origin-bottom-right
        ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-primary text-white p-4 rounded-t-2xl flex justify-between items-center shadow-md z-10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <span className="material-symbols-outlined text-[20px]">support_agent</span>
            </div>
            <div>
              <h3 className="font-headline font-semibold text-sm tracking-wide">Aapki Pooja Concierge</h3>
              <p className="text-[10px] text-primary-fixed opacity-80 uppercase tracking-widest flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse"></span> Online
              </p>
            </div>
          </div>
          <button 
            onClick={toggleChat}
            className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Message Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fbf5ef] hide-scrollbar scroll-smooth">
          {messages.map((msg, idx) => (
            <div 
              key={msg.id} 
              className={`flex w-full animate-fade-in-up ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              style={{ animationDelay: `${idx * 50}ms`, animationFillMode: 'both', animationDuration: '0.3s' }}
            >
              <div 
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm
                  ${msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-sm' 
                    : 'bg-white text-on-surface border border-outline-variant/10 rounded-tl-sm'
                  }`}
              >
                {renderMessageContent(msg.content)}
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
             <div className="flex w-full justify-start">
              <div className="bg-white border border-outline-variant/10 text-on-surface rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex gap-1 items-center">
                <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          )}
          
          {/* Invisible ref element to force scroll to bottom */}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-outline-variant/20 rounded-b-2xl shrink-0">
          <form onSubmit={handleSend} className="flex relative">
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask us anything..."
              className="w-full bg-surface-container-low border-none rounded-full py-3 pl-4 pr-12 text-sm focus:ring-1 focus:ring-primary/30 placeholder:text-outline-variant/80 text-on-surface transition-shadow shadow-inner"
            />
            <button 
              type="submit"
              disabled={!inputValue.trim()}
              className={`absolute right-1.5 top-1.5 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 
                ${inputValue.trim() 
                  ? 'bg-primary text-white shadow-md hover:scale-105 active:scale-95' 
                  : 'bg-transparent text-outline-variant'}`}
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </form>
        </div>
      </div>

      {/* Floating Toggle Button */}
      <button 
        onClick={toggleChat}
        className={`pointer-events-auto w-14 h-14 bg-primary text-white rounded-full shadow-[0_4px_20px_rgba(139,76,80,0.3)] hover:shadow-[0_6px_24px_rgba(139,76,80,0.4)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 relative z-50 group ${
          mounted 
            ? 'animate-bounce-in' 
            : 'opacity-0 scale-0'
        } ${!isOpen ? 'animate-float' : ''}`}
        style={{ animationDelay: mounted && !isOpen ? '0s' : '0s' }}
      >
        <span className={`material-symbols-outlined transition-all duration-300 absolute ${isOpen ? 'scale-0 opacity-0 rotate-90' : 'scale-100 opacity-100 rotate-0'}`}>
          chat_bubble
        </span>
        <span className={`material-symbols-outlined transition-all duration-300 absolute ${isOpen ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 -rotate-90'}`}>
          close
        </span>
        
        {/* Notification Dot */}
        {hasUnread && !isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
        )}
      </button>

    </div>
  );
};

export default Chatbot;
