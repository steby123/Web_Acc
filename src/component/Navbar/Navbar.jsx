import { useState, useEffect } from 'react';
import UserIcon from '../../assets/noun-user-6247989.svg';
import './Navbar.css';

const Navbar = () => {
    const [valid, setValid] = useState(new Date());

    useEffect(() => {
        const date = setInterval(() =>{
            setValid(new Date())
        },1000);

        return () => clearInterval(date);
    },[]);

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
      };

    const formatDate = valid.toLocaleDateString('en-us', options);
    
    return (
        <div className="navbar">
            <div className="margin">
                <div className="date">{formatDate}</div>
                <div className="logo">
                    <img src={UserIcon} alt='user' className='e1' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;