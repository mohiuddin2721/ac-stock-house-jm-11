import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../../src/images/mainLogo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar style={{ 'backgroundColor': '#120E43' }} collapseOnSelect expand="lg" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img className='rounded h-40 w-50' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-light fw-bold' as={Link} to="/home">HOME</Nav.Link>
                            <Nav.Link className='text-light fw-bold' as={Link} to="/inventories">INVENTORY</Nav.Link>
                            <Nav.Link className='text-light fw-bold' as={Link} to="/client">CLIENT</Nav.Link>
                            <Nav.Link className='text-light fw-bold' as={Link} to="/blog">BLOG</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-light fw-bold' as={Link} to="/contact">CONTACT</Nav.Link>
                            <Nav.Link className='text-light fw-bold' as={Link} to="/logIn">LOG IN</Nav.Link>
                            <Nav.Link className='text-light fw-bold' as={Link} to="/signUp">SIGN UP</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;