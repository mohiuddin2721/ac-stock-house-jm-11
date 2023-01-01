import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './InventoryDetail.css';

const InventoryDetail = () => {
    const [reload, setReload] = useState(false);

    const { id } = useParams();
    const [inventoryDetail, setInventoryDetail] = useState({});

    useEffect(() => {
        const url = `https://ac-stock-house-server.onrender.com/items/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventoryDetail(data))
    }, [reload, id]);

    const handleDelivered = () => {
        const newQuantity = parseInt(inventoryDetail?.quantity) - 1;
        // console.log(newQuantity);

        const url = `https://ac-stock-house-server.onrender.com/items/${id}`;

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
                // console.log(data)
                alert('Quantity Delivered')
                toast('Quantity Delivered')
                setReload(!reload)
            })
        }
        else {
            toast('Stock is empty')
        }
    }

    const handleRestock = event => {
        event.preventDefault();
        const increaseQuantity = parseInt(event.target.number.value);
        const quantity = (inventoryDetail?.quantity);
        // console.log(increaseQuantity, quantity);
        const restockQuantity = increaseQuantity + quantity;
        // console.log(restockQuantity);

        const url = `https://ac-stock-house-server.onrender.com/items/${id}`;

        if (increaseQuantity > 0 && quantity >= 0) {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ quantity: restockQuantity})
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                alert('Quantity restock success')
                toast('Quantity restock success')
                setReload(!reload)
            })
        }

    };

    return (
        <div className='container'>
            <h2 style={{'margin-top' : '100px'}} className='head-line text-center'>Details of the inventory items: {inventoryDetail?.titleName}</h2>
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
                <form onSubmit={handleRestock} className='d-flex flex-column'>
                    <label className='mb-3 text-center' htmlFor="">restock the items</label>
                    <input className='mb-3' type="number" name='number' placeholder='How much Items' />
                    <input className='btn btn-outline-primary' type="submit" value="Restock" />
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