import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../../src/images/mainLogo.png';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    // console.log(user?.displayName);
    // console.log(user?.photoURL);

    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth);
        navigate('/home');
    }
    return (
        <div>
            <Navbar style={{ 'backgroundColor': '#120E43' }} collapseOnSelect expand="lg" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img className='rounded h-40 w-50' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-light fw-bold' as={Link} to="/home">HOME</Nav.Link>
                            {
                                user
                                &&
                                <>
                                    <Nav.Link className='text-light fw-bold' as={Link} to="/inventories">MANAGE INVENTORIES</Nav.Link>
                                    <Nav.Link className='text-light fw-bold' as={Link} to="/addItem">ADD ITEM</Nav.Link>
                                    <Nav.Link className='text-light fw-bold' as={Link} to="/myItems">MY ITEMS</Nav.Link>
                                </>

                            }

                            <Nav.Link className='text-light fw-bold' as={Link} to="/client">CLIENT</Nav.Link>
                            <Nav.Link className='text-light fw-bold' as={Link} to="/blog">BLOG</Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link className='text-light fw-bold' as={Link} to="/contact">CONTACT</Nav.Link>

                            {

                                user
                                    ?
                                    <button onClick={handleSignOut} className='btn btn-link text-white fw-bold text-decoration-none'>SIGN OUT</button>
                                    :
                                    <Nav.Link className='text-light fw-bold' as={Link} to="/logIn">LOG IN</Nav.Link>

                            }

                        </Nav>

                        <Nav>
                            {
                                user &&
                                <>
                                    <Nav.Link className='fw-bold text-light mt-2'>{user?.displayName} </Nav.Link>
                                    <Navbar.Brand>
                                        <img style={{ 'borderRadius': '50%', 'maxHeight': '50px' }} src={user?.photoURL} alt="" />
                                    </Navbar.Brand>
                                </>
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;