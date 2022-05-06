import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './InventoryDetail.css';

const InventoryDetail = () => {
    const { id } = useParams();
    const [inventoryDetail, setInventoryDetail] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/items/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventoryDetail(data))
    }, []);

    const handleDelivered = () => {
        const newQuantity = parseInt(inventoryDetail?.quantity) - 1;
        console.log(newQuantity);

        const url = `http://localhost:5000/items/${id}`;

        if (inventoryDetail?.quantity > 0) {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ quantity: newQuantity})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('Quantity Updated')
                toast('Quantity Updated')
            })
        }
        else {
            toast('Stock is empty')
        }
    }

    const handleRestock = event => {

    };

    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-3'>Details of the inventory items: {inventoryDetail?.titleName}</h2>
            <div className='row mt-5'>
                <div className="col-md-6 col-12 ps-5">
                    <div>
                        <img className='w-75' src={inventoryDetail?.picture} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-12 ps-5">
                    <Card border="0" style={{ width: '18rem' }}>
                        <Card.Header>Your Selected Item</Card.Header>
                        <Card.Body>
                            <Card.Title>Item: {inventoryDetail?.titleName}</Card.Title>
                            <Card.Text>
                                <small>Price: {inventoryDetail?.price}<span className='fw-bold'></span></small>
                            </Card.Text>
                            <Card.Text className='p-0 m-0'>
                                description:{inventoryDetail?.description}
                            </Card.Text>
                            <Card.Text className='p-0 mt-2 mb-0'>
                                <span className='fs-5 fst-italic'>Quantity: {inventoryDetail?.quantity}</span>
                            </Card.Text>
                            <Card.Text className='p-0 mt-2 mb-0'>
                                <span className='fs-5 fst-italic'>Sold</span>
                            </Card.Text>
                            <Card.Text className='p-0 mb-2'>
                                Supplier: <span className='fw-normal'>{inventoryDetail?.supplier}</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='mt-3'>
                <button onClick={handleDelivered} className='btn btn-outline-primary d-block mx-auto'>Delivered</button>
            </div>
            <div className='mt-5 w-50 mx-auto'>
                <form className='d-flex flex-column'>
                    <label className='mb-3 text-center' htmlFor="">restock the items</label>
                    <input className='mb-3' type="number" name='number' placeholder='How much Items' />
                    <input onClick={handleRestock} className='btn btn-outline-primary' type="submit" value="Restock" />
                </form>
            </div>
            <div className='mt-3'>
                <Link to='/inventories'>
                    <button className='btn btn-outline-primary d-block mx-auto'>Manage Inventories</button>
                </Link>
                <ToastContainer />
            </div>
        </div>
    );
};

export default InventoryDetail;