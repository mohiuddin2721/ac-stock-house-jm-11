import React from 'react';
import { Carousel } from 'react-bootstrap';
import ac3 from '../../../images/ac3.jpg';
import ac4 from '../../../images/ac4.jpg';
import ac5 from '../../../images/ac5.jpg';
import ac7 from '../../../images/ac7.jpg';

const Carousels = () => {
    return (
        <div>
            <h2 className='head-line text-center mt-2'>Our Upcoming Items</h2>
            <div className='mt-2'>
                <Carousel className='banner-container'>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={ac3}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <span className='text-primary fs-3'>Get it in December 2022</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={ac4}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <span className='text-primary fs-3'>Get it in October 2022</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ac5}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <span className='text-primary fs-3'>Get it in October 2022</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ac7}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <span className='text-primary fs-3'>Get it in December 2022</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Carousels;