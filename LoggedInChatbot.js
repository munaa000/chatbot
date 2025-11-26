import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBot from '../ChatBot';
import './LoggedInChatbot.css';

const LoggedInChatbot = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('로그아웃 되었습니다!');
    navigate('/');
  };

  // 샘플 대화 내역 (나중에 API로 연결 가능)
  const chatHistory = [
    { date: '2025-04-01', summary: '강아지 기침 증상 상담' },
    { date: '2025-04-02', summary: '고양이 눈곱 많음 문의' },
    { date: '2025-04-03', summary: '영양제 추천 요청' },
    { date: '2025-04-04', summary: '피부 알러지 상담' },
    { date: '2025-04-05', summary: '고양이 식욕 저하 원인' },
    { date: '2025-04-06', summary: '강아지 구토 원인 문의' },
    { date: '2025-04-07', summary: '슬개골 탈구 관련 상담' },
    { date: '2025-04-08', summary: '피부 발진 위치별 진단' },
    { date: '2025-04-09', summary: '눈물 자국 관리법' },
    { date: '2025-04-10', summary: '장난감 씹는 습관 문제' },
    { date: '2025-04-11', summary: '기력 없는 증상 문의' },
    { date: '2025-04-12', summary: '고양이 발바닥 껍질 벗겨짐' },
    { date: '2025-04-13', summary: '예방접종 일정 문의' },
    { date: '2025-04-14', summary: '사료 변경 시 주의사항' },
    { date: '2025-04-15', summary: '강아지 설사 멈추지 않음' },
    { date: '2025-04-16', summary: '고양이 털 빠짐 과다' },
    { date: '2025-04-17', summary: '배변 훈련이 잘 안돼요' },
    { date: '2025-04-18', summary: '병원 방문 전 준비사항' },
    { date: '2025-04-19', summary: '노령견 건강 관리법' },
    { date: '2025-04-20', summary: '스트레스 해소 장난감 추천' }
  ];

  return (
    <div className="loggedin-wrapper">
      {/* 대화 내역 영역 */}
      <div className="chat-history-panel">
        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>로그아웃</button>
        </div>
        <h2 className="history-title">📜 이전 대화 내역</h2>
        <ul className="chat-history-list">
          {chatHistory.map((chat, index) => (
            <li key={index} className="chat-history-item">
              <strong>{chat.date}</strong>: {chat.summary}
            </li>
          ))}
        </ul>
      </div>

      {/* 챗봇 영역 */}
      <div className="chatbot-area">
        <ChatBot />
      </div>
    </div>
  );
};

export default LoggedInChatbot;

