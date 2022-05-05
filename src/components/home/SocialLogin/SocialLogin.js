import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import './SocialLogin.css';

const SocialLogin = () => {
    const location = useLocation();

    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    let massageError;

    useEffect(() => {
        if (userGoogle) {
            navigate(from, { replace: true });
        }
    }, [userGoogle, from, navigate]);

    if (loadingGoogle) {
        return <Loading></Loading>
    }

    if (errorGoogle) {
        massageError = <p className='text-danger'>Error: {errorGoogle?.message}</p>
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px', background: '#120e43' }} className='w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px', background: '#120e43' }} className='w-50'></div>
            </div>
            {massageError}
            <div>
                <button
                    style={{ background: '120e43' }}
                    className='btn w-75 d-block mx-auto mx-2 my-2'
                    onClick={() => signInWithGoogle()}>
                    <span className='px-2 text-light'>Google Log In</span>
                </button>
                <button
                    style={{ background: '120e43' }}
                    className='btn w-75 d-block mx-auto my-2'>
                    <span className='px-2 text-light'><small>Facebook Log In</small></span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;