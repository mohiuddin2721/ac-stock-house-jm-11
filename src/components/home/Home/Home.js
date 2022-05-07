import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import HomeItems from '../HomeItems/HomeItems';
import Carousels from '../Carousels/Carousels';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <HomeItems></HomeItems>
            <Carousels></Carousels>
        </div>
    );
};

export default Home;