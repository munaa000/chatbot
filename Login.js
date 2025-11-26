import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    // TODO: 실제 로그인 API 연동 필요
    if (username !== 'test' || password !== '1234') {
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
      return;
    }

    setError('');
    console.log('로그인 성공:', username);
    navigate('/chatbot-loggedin');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-page-box">
        <h2>로그인</h2>
        {error && <p className="login-page-error">{error}</p>}

        <div className="login-page-inputs">
          <input
            type="text"
            className="login-page-input"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <input
            type="password"
            className="login-page-input"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="login-page-btn" onClick={handleLogin}>
            로그인
          </button>
        </div>

        <div className="login-page-links">
          <p className="login-page-signup">
            아직 회원이 아니신가요?{' '}
            <span onClick={() => navigate('/signup')}>회원가입</span>
          </p>
          <p className="login-page-findpw">
            비밀번호를 잊으셨나요?{' '}
            <span onClick={() => navigate('/find-password')}>비밀번호 찾기</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
