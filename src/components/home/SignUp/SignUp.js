import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating] = useUpdateProfile(auth);

    const navigate = useNavigate();

    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleSignUp = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(name, email, password);

        await createUserWithEmailAndPassword(email, password);

        await updateProfile({ displayName : name });
        alert('Updated your profile');

        navigate('/home')
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
                <button type='submit'>SIGN UP</button>
            </form>
            <p className='mt-2'><small>Already have an account?</small> <Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link> </p>
        </div>
    );
};

export default SignUp;