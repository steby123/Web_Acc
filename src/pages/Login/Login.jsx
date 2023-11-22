import { useState } from 'react';
import './Login.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const validateForm = (event) => {
        event.preventDefault();

        const username1 = "ADMIN123";
        const password1 = "KamuHebat1!";

        if (username === username1 && password === password1) {
            window.location.href = "http://localhost:5173/dashboard";
        } else {
            setMessage("Wrong username and/or password.");
        }

        if (username.length < 7 && password.length < 8) {
            setMessage("Username and password must be at least 7 characters.");
        } else if (username.length < 7) {
            setMessage("Username must be at least 7 characters.");
        } else if (password.length < 7) {
            setMessage("Password must be at least 7 characters.");
        } else {
            setMessage('');
        }
    };

    return (
        <div className="container">
            <div className="text">
                <h1>UMKM Makanan Khas Tanjungpinang</h1>
            </div>
            <div className="text1">
                <h2>Aplikasi Penjualan Makanan</h2>
            </div>
            <div className="form-container">
                <form onSubmit={validateForm}>
                    <div className="message" id="message">
                        {message && (
                            <p style={{ color: 'red', fontSize: '24px', fontWeight: '1000' }}>{message}</p>
                        )}
                    </div>
                    <div className="image-input">
                        <input 
                            type="text" 
                            id="username" 
                            name="text" 
                            placeholder="Admin" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}    
                        />
                    </div>
                    <div className="image-input">
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="********" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}    
                        />
                    </div>
                    <button className="opacity" type="submit">Login</button>
                    <div className="text2">
                        <p> Copyright @2023.UMKM Makanan Khas</p>
                    </div>
                    <div className="text3">
                        <p>Tanjungpinang</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
