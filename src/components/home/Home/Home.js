import React from 'react';
import './Home.css';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <h2>This is home page</h2>
            <Inventories></Inventories>
        </div>
    );
};

export default Home;