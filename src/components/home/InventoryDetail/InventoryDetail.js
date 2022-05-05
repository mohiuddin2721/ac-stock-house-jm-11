import React, { useEffect, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './InventoryDetail.css';

const InventoryDetail = () => {
    const { id } = useParams();
    const [inventoryDetail, setInventoryDetail] = useState();

    useEffect(() => {
        const url = `http://localhost:5000/items/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventoryDetail(data))

    }, [])

    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-3'>Details of the inventory items: {inventoryDetail?.titleName}</h2>
            <div className='row mt-5'>
                <div className="col-md-6 col-12">
                    <div>
                        <img src={inventoryDetail?.picture} alt="" />
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
                <button className='btn btn-outline-primary d-block mx-auto'>Delivered</button>
            </div>
            <div className='mt-5 w-50 mx-auto'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>restock the items</Form.Label>
                        <Form.Control type="number" placeholder="How much Items" />
                    </Form.Group>
                    <button className='btn btn-outline-primary'>Restock</button>
                </Form>
            </div>
            <div className='mt-3'>
                <Link to='/inventories'>
                    <button className='btn btn-outline-primary d-block mx-auto'>Manage Inventories</button>
                </Link>
            </div>
        </div>
    );
};

export default InventoryDetail;