import { useState } from 'react';
import LoginUser from '../../assets/noun-user-1994976.svg';
import PassWordUser from '../../assets/noun-password-1648593.svg';
import EmailUser from '../../assets/mail_FILL0_wght400_GRAD0_opsz24.svg';
import UserSignUp from '../hook/useSignUp';
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const {signup, isPending, error } = UserSignUp();

    const validateForm = (event) => {
        event.preventDefault();
        signup(email,username, password);
    };

    const backHandler = () => {
        window.location.href="http://localhost:5173/"
    }

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
                <h2>Register Form</h2>
                {isPending && <p>Loading...</p>}
                {error && <p>{error}</p>}
                    <div className="image-input">
                    <img src={EmailUser} alt='user' />
                        <input 
                            type="email" 
                            id="email" 
                            name="email"  
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}    
                        />
                    </div>
                    <div className="image-input">
                    <img src={LoginUser} alt='user' />
                        <input 
                            type="text" 
                            id="username" 
                            name="text" 
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
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}    
                        />
                    </div>
                    {!isPending && <button className="opacity" type="submit">Register</button>}
                    {!isPending && <button className='opacity' type='submit' onClick={backHandler}>Back</button>}
                    <div className="text2">
                        <p> Copyright @2023.UMKM Makanan Khas</p>
                        <p>Tanjungpinang</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
