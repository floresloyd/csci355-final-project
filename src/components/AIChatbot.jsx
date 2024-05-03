import React, { useState } from 'react';
import './AIChatbot.css'; 
import axios from 'axios';

function AIChatbot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [faqs, setFaqs] = useState([
    {
      question: "How do I add a new job application to JobDoc?",
      answer: "To add a new job application to JobDoc, simply click on the 'Add Job' button located in the control panel on the Home page. Fill out the form with details such as the job role, employer, contact information, and the date you applied. Once completed, submit the form to save the application to your dashboard, where you can track its status and manage other details."
    },
  ]);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };

  const sendMessage = async () => {
    if (!userMessage.trim()) return;
    setIsTyping(true);
    try {
      const response = await axios.post('http://localhost:5000/chat', { message: userMessage });
      const botMessage = response.data.choices[0].message.content;
      setConversation([...conversation, { role: 'user', content: userMessage }, { role: 'bot', content: botMessage }]);
      setUserMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
    setIsTyping(false);
  };

  const handleFAQClick = (faq) => {
    setIsTyping(true);
    setTimeout(() => {
      setConversation([...conversation, { role: 'user', content: faq.question }, { role: 'bot', content: faq.answer }]);
      setIsTyping(false);
      setFaqs(prevFaqs => prevFaqs.filter(item => item.question !== faq.question));
    }, 1000);
  };

  return (
    <div>
      <button className="chatbot-button" onClick={toggleChat}>💬</button>
      <div className={`chatbot-window ${chatOpen ? 'chatbot-window-open' : ''}`}>
        <div className="chat-messages">
          {conversation.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              <strong>{msg.role === 'user' ? 'You:' : 'Bot:'}</strong> {msg.content}
            </div>
          ))}
          {isTyping && (
            <div className="typing-indicator">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          )}
          {faqs.map((faq, index) => (
            <button key={index} onClick={() => handleFAQClick(faq)} className="faq-button">
              {faq.question}
            </button>
          ))}
        </div>
        <div className="chat-input-area">
          <input
            type="text"
            className="chat-input"
            placeholder="Ask me anything..."
            value={userMessage}
            onChange={handleInputChange}
            onKeyPress={event => event.key === 'Enter' && sendMessage()}
          />
          <button className="send-btn" onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default AIChatbot;
