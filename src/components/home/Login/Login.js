import React, { useEffect } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import './Login.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let messageError;

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from]);

    if (loading) {
        return <Loading></Loading>
    };

    if (error) {
        messageError = <p className='text-danger'>Error: {error.message}</p>
    };

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);

        signInWithEmailAndPassword(email, password);
    }

    const passwordReset = async event => {
        const email = event.target.email.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent Email');
        }
        else {
            toast('Enter your email address')
        }
    }

    return (
        <div className="login-container">
            <div className="login-title">LOGIN</div>
            <form className="login-form" onSubmit={handleLogin}>
                <label htmlFor="">Your Email</label>
                <input type="text" name='email' placeholder="Your Email" required />
                <label htmlFor="">Your Password</label>
                <input type="password" name='password' placeholder="password" required />
                {messageError}
                <button type='submit'>Login</button>
            </form>
            <p className='mt-2'><small>New to AC Stock House?</small> <Link to="/signUp" className='text-primary pe-auto text-decoration-none'>Please Sign Up</Link> </p>
            <p><button onClick={passwordReset} className='btn btn-link text-light pe-auto text-decoration-none'>Forget Password ?</button> </p>
        </div>
    );
};

export default Login;