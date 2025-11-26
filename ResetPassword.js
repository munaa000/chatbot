import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ResetPassword.css';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleReset = () => {
    if (!newPassword.trim() || !confirmPassword.trim()) {
      setError('모든 필드를 입력해주세요.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    // TODO: 실제 비밀번호 변경 API 연동
    console.log(`이메일 ${email}의 비밀번호가 재설정됨: ${newPassword}`);
    alert('비밀번호가 성공적으로 변경되었습니다.');
    navigate('/login');
  };

  return (
    <div className="reset-page-container">
      <div className="reset-page-box">
        <h2>비밀번호 재설정</h2>
        {error && <p className="reset-page-error">{error}</p>}
        <input
          type="password"
          className="reset-page-input"
          placeholder="새 비밀번호"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          className="reset-page-input"
          placeholder="새 비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="reset-page-btn" onClick={handleReset}>
          비밀번호 변경
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;

