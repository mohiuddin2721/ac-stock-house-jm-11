import React from 'react';
import './NotFound.css';
import notFound from '../../../images/notFound.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container'>
            <div className='w-75 mx-auto'>
                <img className='w-100' src={notFound} alt="" />
            </div>
            <div>
                <Link to='/home'>
                    <button style={{background : '#120e43', color : 'white'}} className='btn'>Back to Home</button>
                </Link>
                <Link to='/inventories'>
                    <button style={{background : '#120e43', color : 'white'}} className='btn ms-3'>See inventories Items</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;