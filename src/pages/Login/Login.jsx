import { useEffect, useState } from 'react';
import { auth, provider } from '../../firebase/firebase';
import { signInWithPopup } from 'firebase/auth';
import LoginUser from '../../assets/noun-user-1994976.svg';
import PassWordUser from '../../assets/noun-password-1648593.svg';
import './Login.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [value, setValue] = useState('');

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

    const signIn = (event) => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            setValue(event.target.value)
            localStorage.setItem("email", data.user.email)
            window.location.href = "http://localhost:5173/dashboard";
        })
    };

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    },[])

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
                    <img src={LoginUser} alt='user' />
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
                    <img src={PassWordUser} alt='password' />
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
                    <button className='opacity' type='submit' onClick={signIn}>Google</button>
                    <div className="text2">
                        <p> Copyright @2023.UMKM Makanan Khas</p>
                        <p>Tanjungpinang</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
