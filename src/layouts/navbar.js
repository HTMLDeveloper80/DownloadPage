import './navbar.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/Logo.png';

function Navbar(){
    const navigate = useNavigate();

    return(
            <div className="navbar-container">
                <div className="logo-wrapper">
                    <img src={logo} className="logo-img" alt="Logo"/>
                </div>
                <div class="auth-buttons">
                    <button className="sign-up" onClick={() => navigate("/register")}>Sign up</button>
                    <button className="log-in" onClick={() => navigate("/login")}>Log in</button>
                </div>
            </div>
    )
}

export default Navbar;