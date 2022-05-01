import React from 'react';
import './Banner.css';
import banner from '../../../images/banner.webp';

const Banner = () => {
    return (
        <div className='banner-container'>
            <img className='w-100' src={banner} alt="" />
        </div>
    );
};

export default Banner;