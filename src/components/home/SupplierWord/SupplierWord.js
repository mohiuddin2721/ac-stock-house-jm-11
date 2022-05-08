import React from 'react';
import { Accordion, Badge } from 'react-bootstrap';
import './SupplierWord.css';

const SupplierWord = () => {
    return (
        <div className='container mt-5'>
            <h2 className='head-line'>Introduction of Supplier's in World</h2>
            <div className='mt-2'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><span className='fw-bold text-success'>GREE <Badge bg="secondary">Mor info</Badge></span></Accordion.Header>
                        <Accordion.Body>
                        According to the Nikkei newspaper, Gree’s global market share of residential air conditioners reached 20.6% in 2018, ranking No.1 in the world for 14 years.
                        <br />
                        Gree has established 126 research institutions, 1,045 laboratories, 1 academician workstation (motor and control), one national key laboratory, one national engineering research center, one national industrial design center, one national recognized enterprise technology center, and one robotics engineering technology research center.
                        <br />
                        With 30 years of professional production experience for home appliances, it’s a home appliances manufacturing enterprise integrated with research, design, production and sales. Its accumulative investment exceeds RMB 250 million and the floor space is about 180 thousand square meters.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><span className='fw-bold text-success'>SAMSUNG <Badge bg="secondary">Mor info</Badge></span></Accordion.Header>
                        <Accordion.Body>
                            <span className='fs-3'>Our mission & approach</span>
                            <br />
                            Samsung follows a simple business philosophy: to devote its talent and technology to creating superior products and services that contribute to a better global society. To achieve this, Samsung sets a high value on its people and technologies.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><span className='fw-bold text-success'>WALTON <Badge bg="secondary">Mor info</Badge></span></Accordion.Header>
                        <Accordion.Body>
                            <span className='fs-3'>Who We Are</span>
                            <br />
                            Walton is the latest multinational electrical, electronics, automobiles and other appliances brand with one of the largest well equipped R & I facilities in the world carried out its production through different subsidiaries under the banner of Walton group headquarters in Bangladesh. Today, Walton has a workforce of more than 30000+ in total 22 production bases under 700+ acres of factory area. The capacity of yearly production is 10 million units based on the market demands. Walton is the giant professional manufacturer in the relevant industry and has gained high reputation in terms of its unbeatable capability for producing Electrical and Electronics goods in the most competitive way in aspect of quality, cost, design and innovation.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><span className='fw-bold text-success'>HAIER <Badge bg="secondary">Mor info</Badge></span></Accordion.Header>
                        <Accordion.Body>
                            <span className='fs-3'>Haier of the world, Our Haier, Your own Haier!</span>
                            <br />
                            Thirty-five years ago, Haier started from the Chinese market. Today Haier has spread all over Asia, Africa, Europe, North America and the Middle East, and all corners of the world. There are 10 R&D centers, 24 industrial parks, 66 marketing centers and 108 manufacturing plants in the world. 
                            <br />
                            New brands continue to join the Haier family, Aqua, Fischer Parker, GEA, Candy, have become a member of Haier. Haier, is crossing the culture, merging the brand, and coming to you quickly!
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default SupplierWord;