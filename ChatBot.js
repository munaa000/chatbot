import React, { useState, useEffect, useRef } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: '안녕하세요! 무엇을 도와드릴까요?', sender: 'bot' }
  ]);
  const [userInput, setUserInput] = useState('');
  const chatBoxRef = useRef(null);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userInput, sender: 'user' }
      ]);

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: getBotResponse(userInput), sender: 'bot' }
        ]);
      }, 1000);
      
      setUserInput('');
    }
  };

  const getBotResponse = (userMessage) => {
    if (userMessage.includes('안녕')) return '안녕하세요! 반갑습니다!';
    if (userMessage.includes('날씨')) return '오늘 날씨는 맑아요!';
    return '제가 아직 학습되지 않은 질문이에요.';
  };

  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="chatbot-wrapper">
      <div className="chatbot-box">
        <div className="chatbot-chatbox" ref={chatBoxRef}>
          {messages.map((message, index) => (
            <div key={index} className={`chatbot-message ${message.sender}`}>
              {message.sender === 'bot' && (
                <div className="chatbot-message-content">
                  <img src="/petdt.jpg" alt="챗봇 프로필" className="chatbot-bot-icon" />
                  <span className="chatbot-message-text">{message.text}</span>
                </div>
              )}
              {message.sender === 'user' && <span className="chatbot-message-text">{message.text}</span>}
            </div>
          ))}
        </div>
        <div className="chatbot-input-area">
          <input
            type="text"
            className="chatbot-input-field"
            value={userInput}
            onChange={handleInputChange}
            placeholder="메시지를 입력하세요."
          />
          <button className="chatbot-send-btn" onClick={handleSendMessage}>📨</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
