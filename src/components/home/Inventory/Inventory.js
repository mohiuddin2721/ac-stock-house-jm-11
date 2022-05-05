import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Inventory = props => {
    const { titleName, price, picture, description, quantity, supplier } = props.item;

    return (
        <CardGroup className='col-md-4 col-12 border-sm rounded mt-5 Small shadow'>
            <Card>
                <Card.Img variant="top" className='w-100 rounded' src={picture} />
                <Card.Body>
                    <Card.Title>{titleName}</Card.Title>
                    <Card.Text>
                        <small>Price: <span className='fw-bold'>{price}</span></small>
                    </Card.Text>
                    <Card.Text className='p-0 m-0'>
                        {description}
                    </Card.Text>
                    <Card.Text className='p-0 mt-2 mb-0'>
                        <span className='fs-5 fst-italic'>Quantity: {quantity}</span>
                    </Card.Text>
                    <Card.Text className='p-0 mb-2'>
                        Supplier: <span className='fw-normal'>{supplier}</span>
                    </Card.Text>
                    <Card.Text className='text-center'>
                        <button className='btn btn-outline-primary'>Delete</button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export default Inventory;