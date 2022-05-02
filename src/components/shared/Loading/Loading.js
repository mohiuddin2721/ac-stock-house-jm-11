import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css';

const Loading = () => {
    return (
        <div style={{height: '300px'}} className='d-flex justify-content-center align-items-center w-100'>
            <Spinner animation="grow" variant="primary" />
        </div>
    );
};

export default Loading;