import React from 'react';
import useItems from '../../../hooks/useItems';
import HomeItem from '../HomeItem/HomeItem';

const HomeItems = () => {
    const [items] = useItems();
    const sixItems = items.slice(0, 6);

    return (
        <div>
            <h2>Our Inventory Items</h2>
            <div className='container'>
                {
                    sixItems.map(item => <HomeItem
                        key={item.id}
                        item={item}
                    ></HomeItem>)
                }
            </div>
        </div>
    );
};

export default HomeItems;