import React from 'react';
import './AddItem.css';

const AddItem = () => {
    return (
        <div className='mx-auto addItem-container m-4'>
            <h2 className='mb-4 text-center'>You can add New Item</h2>
            <form className='d-flex flex-column'>
                <input className='mb-2 rounded' required placeholder='Name' />
                <input className='mb-2 rounded' required placeholder='Price' type="number" />
                <textarea className='mb-2 rounded' required placeholder='Description' />
                <input className='mb-2 rounded' required placeholder='Quantity' type="number" />
                <input className='mb-2 rounded' required placeholder='Supplier' type="text" />
                <input className='mb-2 rounded' required placeholder='Photo URL' type="text" />
                <input style={{background: '#120e43'}} className='btn text-light' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddItem;