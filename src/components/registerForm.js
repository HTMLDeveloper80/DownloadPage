import { Link } from 'react-router-dom';
import { useState } from 'react';
import './registerForm.css';

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Nieprawidłowy adres email.";

    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasMinLength = password.length >= 6;

    if (!hasMinLength || !hasNumber || !hasSpecialChar) {
      return "Hasło musi mieć min. 6 znaków, zawierać cyfrę i znak specjalny.";
    }

    if (password !== confirmPassword) return "Hasła nie są takie same.";

    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const res = await fetch("http://localhost/Uplodex/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Rejestracja udana!");
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError("");
      } else {
        setError("Błąd: " + (data.error || "Nieznany błąd"));
        setMessage("");
      }
    } catch (err) {
        setError("Błąd połączenia z serwerem.");
        setMessage("");
    }
  };

    return (
      <>
      <div className="register-container">
        <form className="register-box" onSubmit={handleSubmit}>
          <h2>Already have an account? <Link to="/" className="log-in-link">Log in</Link></h2>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <br />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <br />

          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <br />

          <input 
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
          <br />

          <button type="submit">Create account</button>

          {error && <p className="error-text">{error}</p>}
          {message && <p className="success-text">{message}</p>}
        </form>
      </div>
      </>
    );
}

export default RegisterForm;