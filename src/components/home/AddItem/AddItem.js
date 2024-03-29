import React from 'react';
import './AddItem.css';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    // console.log(user.email);

    const onSubmit = (data, event) => {
        // console.log(data)
        const url = `https://ac-stock-house-server.onrender.com/items`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            // console.log(result);
            alert('users added successfully!!!');
            event.target.reset();
        })
    };

    return (
        <div className='mx-auto addItem-container m-4'>
            <h2 style={{'margin-top' : '100px'}} className='mb-4 head-line text-center'>You can add New Item</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' value={user.email} {...register("email", { required: true, maxLength: 40 })} />
                <input className='mb-2' placeholder='Item Name' {...register("titleName", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Supplier' {...register("supplier", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='picture' type="text" {...register("picture")} />
                <input style={{background: '#120e43', color: 'white'}} type="submit" value="Add Service" />

            </form>

        </div>
    );
};

export default AddItem;