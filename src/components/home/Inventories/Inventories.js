import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {
    const [items, setItems] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure???');
        if (proceed) {
            const url = `http://localhost:5000/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
            })
        }
    }

    return (
        <div>
            <h3 className='text-primary text-center mt-4'>Manage All Inventories items</h3>
            <div className='container row mx-auto'>
                {
                    items.map(item => <Inventory
                        key={item._id}
                        item={item}
                        handleDelete={handleDelete}
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