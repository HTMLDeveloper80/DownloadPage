import { useState } from 'react';
import './loginForm.css';

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
          const response = await fetch("http://localhost/Uplodex/login.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email,
              password
            })
          });

          const data = await response.json();

          if (response.ok) {
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            alert("Zalogowano pomyślnie!");
            window.location.href = "/";
          } else {
            setError (data.message || "Błąd logowania.");
          }
        } catch (err) {
            console.error("Błąd: ", error);
            setError("Brak połączenia z serwerem.");
        }
    };

    return(
        <div className="login-container">
            <form className="login-box" onSubmit={handleLogin}>
                <h2>Log in</h2>

                <input
                type="email"
                placeholder="Adres email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />

                <input
                type="password"
                placeholder="Hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />

                {error && <p className="error-text">{error}</p>}
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default LoginForm;