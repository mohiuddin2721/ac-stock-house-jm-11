import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import MyItem from '../MyItem/MyItem';
import './MyItems.css';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);

    useEffect( () => {
        const getMyItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myItems?email=${email}`;
            const {data} = await axios.get(url);
            setMyItems(data);
        }
        getMyItems();

    }, [user]);

    const handleMyItemDelete = id => {
        const proceed = window.confirm('Are you sure???');
        if (proceed) {
            const url = `http://localhost:5000/myItems/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = myItems.filter(item => item._id !== id);
                setMyItems(remaining);
            })
        }
    }

    return (
        <div>
            <h2 className='text-center text-primary'>Your Items: {myItems.length}</h2>
            <div className='container row mx-auto'>
                {
                    myItems.map(myItem => <MyItem
                    key={myItem._id}
                    myItem={myItem}
                    handleMyItemDelete={handleMyItemDelete}
                    ></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;