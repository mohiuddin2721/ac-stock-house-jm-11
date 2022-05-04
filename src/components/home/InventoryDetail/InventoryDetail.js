import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './InventoryDetail.css';

const InventoryDetail = () => {
    const { id } = useParams();

    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-3'>Details of the inventory items: {id}</h2>
            <div className='row mt-5'>
                <div className="col-md-6 col-12">
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-12 ps-5">
                    <Card border="0" style={{ width: '18rem' }}>
                        <Card.Header>Your Selected Item</Card.Header>
                        <Card.Body>
                            <Card.Title>Item: </Card.Title>
                            <Card.Text>
                                <small>Price: <span className='fw-bold'></span></small>
                            </Card.Text>
                            <Card.Text className='p-0 m-0'>
                                description:
                            </Card.Text>
                            <Card.Text className='p-0 mt-2 mb-0'>
                                <span className='fs-5 fst-italic'>Quantity: </span>
                            </Card.Text>
                            <Card.Text className='p-0 mt-2 mb-0'>
                                <span className='fs-5 fst-italic'>Sold: </span>
                            </Card.Text>
                            <Card.Text className='p-0 mb-2'>
                                Supplier: <span className='fw-normal'></span>
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
                    <button className='btn btn-outline-primary d-block mx-auto'>Restock</button>
                </Form>
            </div>
        </div>
    );
};

export default InventoryDetail;