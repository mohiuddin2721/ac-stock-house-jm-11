import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import HomeItems from '../HomeItems/HomeItems';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <HomeItems></HomeItems>
        </div>
    );
};

export default Home;