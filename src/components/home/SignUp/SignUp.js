import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSignUp = event => {

    }
    return (
        <div className="login-container">
            <div className="login-title">SIGN UP</div>
            <form className="login-form" onSubmit={handleSignUp}>
                <label htmlFor="">Your Name</label>
                <input type="text" name='name' placeholder="Your Name" />
                <label htmlFor="">Your Email</label>
                <input type="text" name='email' placeholder="Your Email" required />
                <label htmlFor="">New Password</label>
                <input type="password" name='password' placeholder="Password" required />
                <label htmlFor="">Confirm Password</label>
                <input type="password" name='password' placeholder="Confirm Password" required />
                <button type='submit'>SIGN UP</button>
            </form>
            <p className='mt-2'><small>Already have an account?</small> <Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link> </p>
        </div>
    );
};

export default SignUp;