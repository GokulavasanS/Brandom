import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = ({ setShowChatbot }) => {
  const [messages, setMessages] = useState([
    { text: "Welcome! How can I help you today 😃", options: ["Services", "Pricing", "Contact", "Portfolio"] }
  ]);

  const handleOptionClick = (option) => {
    let newMessages = [...messages, { text: option }];
    if (option === "Services") {
      newMessages = [...newMessages, { text: "We offer the following services:", options: ["Web Development", "Graphic Design", "SEO", "Consulting"] }];
    } else if (option === "Pricing") {
      newMessages = [...newMessages, { text: "Our pricing details are:", options: ["Basic", "Standard", "Premium"] }];
    } else if (option === "Contact") {
      newMessages = [...newMessages, { text: "You can contact us via email at contact@brandom.com or call us at 123-456-7890." }];
    } else if (option === "Portfolio") {
      newMessages = [...newMessages, { text: "Check out our portfolio at brandom.com/portfolio." }];
    } else {
      newMessages = [...newMessages, { text: "Thank you for your interest! How else can I assist you?", options: ["Services", "Pricing", "Contact", "Portfolio"] }];
    }
    setMessages(newMessages);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot">
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className="chat-message bot-message">
              {message.text}
              {message.options && (
                <div className="options">
                  {message.options.map((option, idx) => (
                    <button key={idx} onClick={() => handleOptionClick(option)}>
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <button className="back-btn" onClick={() => setShowChatbot(false)}>Back</button>
    </div>
  );
};

export default Chatbot;
``