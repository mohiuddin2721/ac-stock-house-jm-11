import React from 'react';
import useItems from '../../../hooks/useItems';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {
    const [items] = useItems();
    return (
        <div>
            <h3 className='text-primary text-center mt-4'>Our All Inventories items</h3>
            <div className='container row mx-auto'>
                {
                    items.map(item => <Inventory
                        key={item.id}
                        item={item}
                    ></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventories;