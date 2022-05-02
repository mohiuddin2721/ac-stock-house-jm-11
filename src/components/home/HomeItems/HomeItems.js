import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import HomeItem from '../HomeItem/HomeItem';

const HomeItems = () => {
    const [items] = useItems();
    const sixItems = items.slice(0, 6);

    return (
        <div>
            <h1 className='text-center text-primary mt-5'>Our Inventory Items</h1>
            <div className='container row mx-auto'>
                {
                    sixItems.map(item => <HomeItem
                        key={item.id}
                        item={item}
                    ></HomeItem>)
                }
            </div>
            <div className='m-5 text-center'>
                <Link to='/inventories'>
                    <button className='btn btn-lg btn-primary'>See all Items</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeItems;