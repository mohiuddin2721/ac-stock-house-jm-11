import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import MyItem from '../MyItem/MyItem';
import './MyItems.css';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getMyItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myItems?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setMyItems(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getMyItems();

    }, [user, navigate]);

    const handleMyItemDelete = id => {
        const proceed = window.confirm('Are you sure???');
        if (proceed) {
            const url = `http://localhost:5000/myItems/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
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