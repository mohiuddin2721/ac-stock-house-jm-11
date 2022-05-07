import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import HomeItem from '../HomeItem/HomeItem';
import './HomeItems.css';

const HomeItems = () => {
    const [items] = useItems();
    const sixItems = items.slice(0, 6);

    return (
        <div>
            <h1 className='text-center head-line mt-3'>Our Inventory Items</h1>
            <div className='container row mx-auto'>
                {
                    sixItems.map(item => <HomeItem
                        key={item._id}
                        item={item}
                    ></HomeItem>)
                }
            </div>
            <div className='m-5 text-center'>
                <Link to='/inventories'>
                    <button style={{background: '#120e43', color: 'white'}} className='btn btn-lg'>Manage Inventories</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeItems;