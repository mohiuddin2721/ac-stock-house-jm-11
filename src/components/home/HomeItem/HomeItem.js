import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './HomeItem.css';

const HomeItem = props => {
    const {titleName, price, picture, description} = props.item;

    return (
        <CardGroup className='col-md-4 col-12 border-sm rounded'>
            <Card border='primary'>
                <Card.Img variant="top" className='w-100 rounded' src={picture} />
                <Card.Body>
                    <Card.Title>{titleName}</Card.Title>
                    <Card.Text>
                        <small>Price: <span className='fw-bold'>{price}</span></small>
                    </Card.Text>
                    <Card.Text className='p-0 m-0'>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export default HomeItem;