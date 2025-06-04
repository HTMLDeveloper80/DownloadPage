import './navbar.css';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/images/Logo.png';

function Navbar({ isLoggedIn, onLogout }){
    const navigate = useNavigate();

    return(
            <div className="navbar-container">
                <div className="logo-wrapper">
                    <Link to="/" className="logo-link">
                        <img src={logo} className="logo-img" alt="Logo"/>
                    </Link>
                </div>
                <div class="auth-buttons">
                    {isLoggedIn ? (
                        <>
                            <button className="dashboard" onClick={() => navigate("/dashboard")}>Dashboard</button>
                            <button className="logout" onClick={onLogout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <button className="sign-up" onClick={() => navigate("/register")}>Sign up</button>
                            <button className="log-in" onClick={() => navigate("/login")}>Log in</button>
                        </>
                    )}
                    
                </div>
            </div>
    )
}

export default Navbar;