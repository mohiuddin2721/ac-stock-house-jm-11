import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {
    const [items] = useItems();
    return (
        <div>
            <h3 className='text-primary text-center mt-4'>Manage All Inventories items</h3>
            <div className='container row mx-auto'>
                {
                    items.map(item => <Inventory
                        key={item._id}
                        item={item}
                    ></Inventory>)
                }
            </div>
            <div className='mt-5'>
                <Link to='/addItem'>
                    <button style={{background: '#120e43', color: 'white'}} className='btn d-block mx-auto'>Add New Item</button>
                </Link>
            </div>
        </div>
    );
};

export default Inventories;