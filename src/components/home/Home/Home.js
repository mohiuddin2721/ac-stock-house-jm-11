import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import HomeItems from '../HomeItems/HomeItems';
import Carousels from '../Carousels/Carousels';
import SupplierWord from '../SupplierWord/SupplierWord';
import Future from '../Future/Future';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <HomeItems></HomeItems>
            <Carousels></Carousels>
            <SupplierWord></SupplierWord>
            <Future></Future>
        </div>
    );
};

export default Home;