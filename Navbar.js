import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <Link to="/" className="navbar-link">🐾 홈</Link>
      </div>
      <div className="navbar-center">
        <Link to="/chatbot" className="navbar-link">🐾 챗봇</Link>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="navbar-login-btn">🐾 로그인</Link>
      </div>
    </nav>
  );
};

export default Navbar;

