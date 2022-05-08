import React, { useState } from 'react';
import './Future.css';
import ac1 from '../../../images/ac1.jpg'
import ac2 from '../../../images/ac2.jpg'
import ac6 from '../../../images/ac6.jpg'
import { Button, Offcanvas } from 'react-bootstrap';

const Future = ({ name, ...props }) => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
        <div className='container mt-5'>
            <h2 className="head-line pb-3">Read about future Air-Condition</h2>
            <div className='row mx-auto'>
                <div className="col-md-4 col-12 mb-2">
                    <div>
                        <img className='w-100' src={ac1} alt="" />
                    </div>
                    <div className='mt-2 text-center'>
                        <Button style={{ background: '#120e43', color: 'white' }} onClick={handleShow} className="me-2">
                            Read Me {name}
                        </Button>
                        <Offcanvas show={show} onHide={handleClose} {...props}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Solar Thermal Air Conditioning</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <img className='w-100' src={ac1} alt="" />
                                Solar air conditioning is another technology that's been considered for several years, but is just now becoming ready for primetime. One advantage of solar thermal energy, it can be used to efficiently cool in the summer and also heat domestic hot water and buildings in the winter. On the down side, it doesn't provide continued air cooling into the evening, once the sun is down.
                                <br />
                                With a solar thermal air conditioner, the solar heat is used to heat one end of the system of expansion/condensation pipes and the other end gets cold enough to make ice.
                                <br />
                                Large industrial demonstration units have been in operation for a couple of years. We're still waiting for residential solar thermal air conditioning systems.
                                <br />
                                NOTE: several "Solar Air Conditioners" are advertised on the internet and elsewhere. Most of these units are using Solar Photovoltaic panels to power a conventional air conditioner. Using electricity generated from a Solar PV module, does NOT make a conventional air conditioner, a "Solar Air Conditioner".
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </div>
                <div className="col-md-4 col-12 mb-2">
                    <div>
                        <img className='w-100' src={ac2} alt="" />
                    </div>
                    <div className='mt-2 text-center'>
                        <Button style={{ background: '#120e43', color: 'white' }} onClick={handleShow1} className="me-2">
                            Read Me {name}
                        </Button>
                        <Offcanvas show={show1} onHide={handleClose1} {...props}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>MIT Wristband Could Make AC Obsolete</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <img className='w-100' src={ac2} alt="" />
                                The Wristify prototype is a personal climate-controlling wearable.
                                <br />
                                HERE'S A SCARY statistic: In 2007, 87 percent of households in the U.S. used air conditioning, compared to just 11 percent of households in Brazil and a mere 2 percent in India. Another one: By 2025, booming nations like those are projected to account for a billion new consumers worldwide, with a corresponding explosion in demand for air conditioning expected to arrive along with them. Keeping indoor spaces at comfortable temperatures requires a huge amount of electricity--especially in sweltering climates like India and Brazil--and in the U.S. alone it accounts for a full 16.5 percent of energy use.
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </div>
                <div className="col-md-4 col-12 mb-2">
                    <div>
                        <img className='w-100' src={ac6} alt="" />
                    </div>
                    <div className='mt-2 text-center'>
                        <Button style={{ background: '#120e43', color: 'white' }} onClick={handleShow2} className="me-2">
                            Read Me {name}
                        </Button>
                        <Offcanvas show={show2} onHide={handleClose2} {...props}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Haier hints at futuristic air conditioner</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <img className='w-100' src={ac6} alt="" />
                                GERMANY: Chinese manufacturer Haier has hinted at the launch of a new hi-tech design air conditioner in Europe.
                                <br />
                                Rene Aubertin, the CEO of Haier Europe, revealed some details of the futuristic-looking air conditioner during this week’s IFA consumer electronics show in Berlin. He indicated that the new product will change people’s recognition of air conditioners for home use.
                                <br />
                                In addition, Haier also hinted at breakthroughs in DC control technology, comfortable sleeping pattern curve, WIFI smart frequency conversion and ESQ noise reduction.
                                <br />
                                The product rendering was demonstrated to reporters, but Haier warned that the final design of the product is still under “modification”. No details of possible launch dates were given.
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Future;