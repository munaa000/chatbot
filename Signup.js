import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [usernameCheckMessage, setUsernameCheckMessage] = useState('');
    const [isUsernameChecked, setIsUsernameChecked] = useState(false);
    const navigate = useNavigate();

    const validate = () => {
        let errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // 아이디: 영문 숫자 포함, 6자 이상
        const usernameRegex = /^[a-zA-Z0-9]+$/;
        const usernameHasLetter = /[a-zA-Z]/.test(username);
        const usernameHasNumber = /[0-9]/.test(username);

        // 비밀번호: 영문 숫자 특수문자 포함, 6자 이상
        const pwHasLetter = /[a-zA-Z]/.test(password);
        const pwHasNumber = /[0-9]/.test(password);
        const pwHasSpecial = /[@$!%*?&]/.test(password);

        if (!name.trim()) errors.name = '이름을 입력하세요.';

        if (!username.trim()) {
            errors.username = '아이디를 입력하세요.';
        } else if (!usernameRegex.test(username)) {
            errors.username = '아이디는 영문과 숫자만 사용할 수 있습니다.';
        } else if (username.length < 6 || !usernameHasLetter || !usernameHasNumber) {
            errors.username = '아이디는 영문과 숫자를 포함한 6자 이상이어야 합니다.';
        } else if (!isUsernameChecked) {
            errors.username = '아이디 중복 확인을 해주세요.';
        }

        if (!emailRegex.test(email.trim())) {
            errors.email = '올바른 이메일을 입력하세요.';
        }

        if (password.length < 6 || !pwHasLetter || !pwHasNumber || !pwHasSpecial) {
            errors.password = '비밀번호는 영문, 숫자, 특수문자를 포함한 6자 이상이어야 합니다.';
        }

        if (password !== confirmPassword) {
            errors.confirmPassword = '비밀번호가 일치하지 않습니다.';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSignup = () => {
        if (validate()) {
            console.log('회원가입 정보:', { name, username, email, password });
            alert('회원가입이 완료되었습니다!');
            navigate('/login');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSignup();
        }
    };

    const checkUsernameDuplicate = () => {
        const existingUsernames = ['testuser', 'admin', 'guest']; // 예시

        if (!username.trim()) {
            setUsernameCheckMessage('아이디를 입력 후 중복 확인을 해주세요.');
            setIsUsernameChecked(false);
            return;
        }

        if (existingUsernames.includes(username.trim())) {
            setUsernameCheckMessage('❌ 사용 불가능한 아이디입니다.');
            setIsUsernameChecked(false);
        } else {
            setUsernameCheckMessage('✅ 사용 가능한 아이디입니다.');
            setIsUsernameChecked(true);
        }
    };

    return (
        <div className="signup-page-container">
            <div className="signup-page-box">
                <h2>회원가입</h2>

                <input 
                    type="text" 
                    className="signup-page-input" 
                    placeholder="이름" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                {errors.name && <p className="signup-page-error">{errors.name}</p>}

                <div className="signup-id-check-wrapper">
                    <input 
                        type="text" 
                        className="signup-page-input" 
                        placeholder="아이디 (영문+숫자 포함 6자 이상)" 
                        value={username} 
                        onChange={(e) => {
                            const value = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
                            setUsername(value);
                            setUsernameCheckMessage('');
                            setIsUsernameChecked(false);
                        }}
                        onKeyPress={handleKeyPress}
                    />
                    <button 
                        className="signup-check-btn" 
                        onClick={checkUsernameDuplicate}
                    >
                        중복확인
                    </button>
                </div>
                {errors.username && <p className="signup-page-error">{errors.username}</p>}
                {usernameCheckMessage && <p className="signup-page-check-msg">{usernameCheckMessage}</p>}

                <input 
                    type="email" 
                    className="signup-page-input" 
                    placeholder="이메일" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                {errors.email && <p className="signup-page-error">{errors.email}</p>}

                <input 
                    type="password" 
                    className="signup-page-input" 
                    placeholder="비밀번호 (영문+숫자+특수문자 포함 6자 이상)" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                {errors.password && <p className="signup-page-error">{errors.password}</p>}

                <input 
                    type="password" 
                    className="signup-page-input" 
                    placeholder="비밀번호 확인" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                {errors.confirmPassword && <p className="signup-page-error">{errors.confirmPassword}</p>}

                <button className="signup-page-btn" onClick={handleSignup}>회원가입</button>
            </div>
        </div>
    );
};

export default Signup;
