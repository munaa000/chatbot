import React, { useState } from 'react';
import './FindPassword.css'; // 새로운 CSS 파일 사용
import { useNavigate } from 'react-router-dom';

const FindPassword = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSendCode = () => {
    if (!email.trim()) {
      setError('이메일을 입력해주세요.');
      return;
    }

    // TODO: 실제 이메일 전송 API 연결
    console.log('이메일로 인증번호 전송:', email);
    setError('');
    setSent(true);
  };

  return (
    <div className="find-page-container">
      <div className="find-page-box">
        <h2>비밀번호 찾기</h2>
        {error && <p className="find-page-error">{error}</p>}
        {!sent ? (
          <>
            <input
              type="email"
              className="find-page-input"
              placeholder="가입한 이메일 주소"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="find-page-btn" onClick={handleSendCode}>
              인증번호 전송
            </button>
          </>
        ) : (
          <>
            <p>입력하신 이메일로 인증번호를 전송했습니다.</p>
            <button className="find-page-btn" onClick={() => navigate('/verify-code', { state: { email } })}>
              인증번호 입력하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FindPassword;
