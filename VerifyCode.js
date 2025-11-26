// VerifyCode.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './VerifyCode.css';

const VerifyCode = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleVerify = () => {
    if (!code.trim()) {
      setError('인증번호를 입력해주세요.');
      return;
    }

    // TODO: 실제 인증번호 검증 API 연동
    if (code !== '123456') { // 테스트용 인증번호
      setError('인증번호가 올바르지 않습니다.');
      return;
    }

    setError('');
    console.log('인증 성공');
    navigate('/reset-password', { state: { email } });
  };

  return (
    <div className="login-page-container">
      <div className="login-page-box">
        <h2>인증번호 확인</h2>
        {error && <p className="login-page-error">{error}</p>}
        <input
          type="text"
          className="login-page-input"
          placeholder="인증번호 입력"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button className="login-page-btn" onClick={handleVerify}>
          인증 확인
        </button>
      </div>
    </div>
  );
};

export default VerifyCode;
