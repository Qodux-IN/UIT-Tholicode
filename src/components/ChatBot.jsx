import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function ChatBot() {
  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you?' }
  ]);
  const [input, setInput] = useState('');
  const [botHi, setBotHi] = useState('');
  const messagesEndRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBotHi('👋 Hi there!');
      setTimeout(() => setBotHi(''), 3000);
    }, 5000);

    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    return () => clearInterval(interval);
  }, [messages, isTyping]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = () => {
  if (!input.trim()) return;

  const userMessage = { from: 'user', text: input.trim() };
  setMessages(prev => [...prev, userMessage]);
  setInput('');
  setIsTyping(true);

  const lower = input.toLowerCase();
  let botText = 'Sorry, I did not understand that. Try asking about courses, departments, admissions, or contact info.';

  if (['hi', 'hello', 'hey'].some(word => lower.includes(word))) {
    botText = 'Hello! 👋 I’m here to help you with info about our college.';
  } else if (lower.includes('help')) {
    botText = 'Sure! You can ask me about courses, departments, faculties, admission process, or contact info.';
  } else if (lower.includes('course') || lower.includes('program')) {
    botText = 'We offer:\n• BSc Computer Science with AI\n• BCom Finance with Minor in Computer\nMore programs coming soon!';
  } else if (lower.includes('department') || lower.includes('stream')) {
    botText = 'We currently have:\n• Department of Computer Science\n• Department of Commerce';
  } else if (lower.includes('faculty') || lower.includes('teacher')) {
    botText = 'Our faculty members are experienced and dedicated. You can view them on the "Faculties" page.';
  } else if (lower.includes('admission') || lower.includes('apply')) {
    botText = 'You can apply at:\nhttps://admissions.keralauniversity.ac.in/\nNeed help? Let me know!';
  } else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone')) {
    botText = '📧 Email: uittholicode@gmail.com\n📞 Phone: +99 9999999999';
  } else if (lower.includes('bye')) {
    botText = 'Goodbye! Feel free to come back anytime.';
  }

  // Simulate bot typing with delay
  setTimeout(() => {
    setMessages(prev => [...prev, { from: 'bot', text: botText }]);
    setIsTyping(false);
  }, 1000);
};

  return (
    <>
      {/* Floating Button */}
      <div
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 p-3 rounded-full cursor-pointer shadow-lg animate-bounce"
        onMouseEnter={() => setShowModal(true)}
      >
        <MessageCircle className="text-white" />
        {botHi && (
          <div className="absolute w-25 -top-11 right-8 bg-white text-sm text-black px-2 py-3 rounded shadow">
            {botHi}
          </div>
        )}
      </div>

      {/* Chat Modal */}
      {showModal && (
        <div className="fixed sm:bottom-20 bottom-24 sm:right-6 right-6 sm:w-96 w-80 h-[450px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center bg-green-500 text-white p-3 rounded-t-xl">
            <span className="font-semibold">ChatBot</span>
            <button onClick={() => setShowModal(false)}>
              <X className="w-4 h-4 cursor-pointer" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.from === 'bot' ? 'justify-start' : 'justify-end'}`}>
                {msg.from === 'bot' && (
                  <div className="flex items-start space-x-2">
                    <span className="text-xl">🤖</span>
                    <div className="bg-gray-200 text-black px-3 py-2 rounded-lg max-w-xs">
                      {msg.text}
                    </div>
                  </div>
                )}
                {msg.from === 'user' && (
                  <div className="flex items-start space-x-2">
                    <div className="bg-green-100 text-black px-3 py-2 rounded-lg max-w-xs">
                      {msg.text}
                    </div>
                    <span className="text-xl">🧑</span>
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 text-gray-500 text-sm animate-pulse">
                <span className="text-xl">🤖</span>
                <span>Bot is typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {isTyping && (
            <div className="flex items-center gap-2 text-gray-500 text-sm animate-pulse">
              <span className="text-xl">🤖</span>
              <span>Bot is typing...</span>
            </div>
          )}

          {/* Input */}
          <div className="flex border-t px-3 py-2 bg-white">
            <input
              type="text"
              className="flex-1 p-2 text-sm outline-none"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              className="bg-green-500 text-white px-3 ml-2 rounded hover:bg-green-700"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
