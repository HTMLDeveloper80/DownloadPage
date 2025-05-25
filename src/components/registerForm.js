import { Link } from 'react-router-dom';
import { useState } from 'react';
import './registerForm.css';

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      } else {
        setMessage("Błąd: " + (data.error || "Nieznany błąd"));
      }
    } catch (err) {
      setMessage("Błąd połączenia z serwerem");
      console.error(err);
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

          <button type="submit">Create account</button>

          {message && <p>{message}</p>}
        </form>
      </div>
      </>
    );
}

export default RegisterForm;