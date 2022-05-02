import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
    }
    return (
        <div className="login-container">
            <div className="login-title">LOGIN</div>
            <form className="login-form" onSubmit={handleLogin}>
                <input type="text" name='email' placeholder="Your Email" required />
                <input type="password" name='password' placeholder="password" required />
                <button type='submit'>Login</button>
            </form>
            <p className='mt-2'><small>New to AC Stock House?</small> <Link to="/signUp" className='text-primary pe-auto text-decoration-none'>Please Sign Up</Link> </p>
            <p><button className='btn btn-link text-light pe-auto text-decoration-none'>Forget Password ?</button> </p>
        </div>
    );
};

export default Login;