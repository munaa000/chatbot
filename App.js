import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Chatbot from './ChatBot';
import Login from './Login';
import Signup from './Signup';
import LoggedInChatbot from './components/LoggedInChatbot'; // ✅ 경로와 이름 수정됨
import FindPassword from './FindPassword';
import VerifyCode from './VerifyCode';
import ResetPassword from './ResetPassword';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chatbot-loggedin" element={<LoggedInChatbot />} /> {/* ✅ 이름 일치 */}
        <Route path="/" element={<Home />} />
        <Route path="/find-password" element={<FindPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  );
};

export default App;

