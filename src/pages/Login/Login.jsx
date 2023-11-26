import { useEffect, useState } from 'react';
import { auth, provider } from '../../firebase/firebase';
import { signInWithPopup } from 'firebase/auth';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import LoginUser from '../../assets/mail_FILL0_wght400_GRAD0_opsz24.svg';
import PassWordUser from '../../assets/noun-password-1648593.svg';
import './Login.css';
import useLogin from '../hook/useLogin';  // Import the correct hook name

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [value, setValue] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const emailNotValid = submitted && !email.includes('@');
    const passwordNotValid = submitted && password.trim().length < 6;
    const history = useHistory();
    const { login,isPending,} = useLogin();  // Correct hook name

    const validateForm = async (event) => {
        event.preventDefault();
        setEmail('');
        setPassword('');
        setSubmitted(true);

        try {
            await login(email, password);

            // If no error, check for minimum length requirements
            if (email.length < 7 || password.length < 8) {
                setMessage("Email must be at least 7 characters and password must be at least 8 characters.");
            } else {
                setMessage('');
                history.push('/dashboard');
                // Redirect to the dashboard or any other page after successful login
            }
        } catch (error) {
            console.error(error.message);
            if (!email.includes('@')) {
                setMessage('Invalid email. Please enter a valid email address.');
            } else if (password.trim().length < 6) {
                setMessage('Invalid password. Password must be at least 6 characters.');
            } else {
                setMessage('Invalid email or password.');
            }
        }
    };

    const signIn = (event) => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            setValue(event.target.value)
            localStorage.setItem("email", data.user.email)
            history.push('/dashboard');
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
                            type="email" 
                            id="username" 
                            style={{background : emailNotValid ? '#fed2d2' : '#d1d5db'}}
                            name="text" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}    
                        />
                    </div>
                    <div className="image-input">
                    <img src={PassWordUser} alt='password' />
                        <input 
                            type="password" 
                            id="password" 
                            style={{background: passwordNotValid ? '#fed2d2' : '#d1d5db'}}
                            name="password" 
                            placeholder="********" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}    
                        />
                    </div>
                    {!isPending && <button className="opacity" type="submit">Login</button>}
                    {isPending && <button className="opacity" type="submit">Login</button>}
                    {!isPending && <button className='opacity' type='button' onClick={signIn}>Google</button>}
                    <div className="text2">
                        <p> Copyright @2023.UMKM Makanan Khas Tanjungpinang</p>
                        <p>Don't have account? <Link to="/register"  style={{ textDecoration: "none", color: "blue" }}>SignUp</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
