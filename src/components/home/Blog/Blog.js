import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <div className='container m-5'>
            <div>
                <CardGroup className='container mt-5'>
            <Card className='m-4' border="primary">
                <Card.Footer className='border question'>
                    <Card.Title className='fs-6'>Difference between javascript and nodejs?</Card.Title>
                </Card.Footer>
                <Card.Body className='border'>
                    <Card.Text>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='m-4' border="primary">
                <Card.Footer className='border question'>
                    <Card.Title className='fs-6'>When should you use nodejs and when should you use mongodb?</Card.Title>
                </Card.Footer>
                <Card.Body className='border'>
                    <Card.Text>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
            </div>
            <div>
                <CardGroup className='container mt-5'>
            <Card className='m-4' border="primary">
                <Card.Footer className='border question'>
                    <Card.Title className='fs-6'>Differences between sql and no-sql databases?</Card.Title>
                </Card.Footer>
                <Card.Body className='border'>
                    <Card.Text>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='m-4' border="primary">
                <Card.Footer className='border question'>
                    <Card.Title className='fs-6'>What is the purpose of jwt and how does it work?</Card.Title>
                </Card.Footer>
                <Card.Body className='border'>
                    <Card.Text>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
            </div>
        </div>
    );
};

export default Blog;