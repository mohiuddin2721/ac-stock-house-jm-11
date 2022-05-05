import React from 'react';
import './SocialLogin.css';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px', background: '#120e43' }} className='w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px', background: '#120e43' }} className='w-50'></div>
            </div>
            <div className=''>
                <button
                    style={{ background: '120e43' }}
                    className='btn w-75 d-block mx-auto mx-2 my-2'>
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