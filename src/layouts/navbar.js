import './navbar.css';
import logo from '../assets/images/Logo.png';

function Navbar(){
    return(
            <div className="navbar-container">
                <div className="logo-wrapper">
                    <img src={logo} className="logo-img" alt="Logo"/>
                </div>
                <div class="auth-buttons">
                    <button className="sign-up">Sign up</button>
                    <button className="log-in">Log in</button>
                </div>
            </div>
    )
}

export default Navbar;