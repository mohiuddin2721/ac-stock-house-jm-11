import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
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
            // navigate(from, { replace: true });
        }
    }, [user, navigate, from]);

    if (loading || sending) {
        return <Loading></Loading>
    };

    if (error) {
        messageError = <p className='text-danger'>Error: {error.message}</p>
    };

    const handleLogin = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);

        await signInWithEmailAndPassword(email, password);
        const {data} = await axios.post('http://localhost:5000/getToken', {email});
        // console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }

    const passwordReset = async (event) => {
        const email = emailRef.current.value;
        console.log(email);
        if (email) {
            await sendPasswordResetEmail(email);
            alert('Sent Email');
            toast('Sent Email');
        }
        else {
            toast('Enter your email address');
            alert('Enter your email address');
        }
    }

    return (
        <div className="login-container">
            <div className="login-title">LOGIN</div>
            <form className="login-form" onSubmit={handleLogin}>
                <label htmlFor="">Your Email</label>
                <input type="email" ref={emailRef} name='email' placeholder="Your Email" required />
                <label htmlFor="">Your Password</label>
                <input type="password" name='password' placeholder="password" required />
                {messageError}
                <button type='submit'>Login</button>
            </form>
            <p className='mt-2'><small>New to AC Stock House?</small> <Link to="/signUp" className='text-primary pe-auto text-decoration-none'>Please Sign Up</Link> </p>
            <p><button onClick={passwordReset} className='btn btn-link text-light pe-auto text-decoration-none'>Forget Password ?</button> </p>
            <div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;