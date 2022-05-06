import React from 'react';
import './Footer.css';
import brand1 from '../../../images/brand1.png';
import brand2 from '../../../images/brand2.png';
import brand3 from '../../../images/brand3.png';
import brand4 from '../../../images/brand4.png';

const Footer = () => {
    return (
        <footer className='mt-5'>
            <div className='container'>
                <div className='row p-5'>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                        <div>
                            <h3 className='text-white fw-lighter mb-4'>Get in touch</h3>
                            <ul>
                                <li className='text-white'>
                                    <p>Phone: 0182-44-3535</p>
                                </li>
                                <li className='text-white'>
                                    <p>acstock@help.com</p>
                                </li>
                                <li className='text-white'>
                                    <p>Lalbagh Kella</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                        <div>
                            <h3 className='text-white fw-lighter mb-4'>SUSTAINABILITY</h3>
                            <ul>
                                <li className='text-white'>
                                    <a className='text-white text-decoration-none' href=" ">Overview</a>
                                </li>
                                <li className='text-white'>
                                    <a className='text-white text-decoration-none' href=" ">Environment</a>
                                </li>
                                <li className='text-white'>
                                    <a className='text-white text-decoration-none' href=" ">Corporate Citizenship</a>
                                </li>
                                <li className='text-white'>
                                    <a className='text-white text-decoration-none' href=" ">Digital Responsibility</a>
                                </li>
                                <li className='text-white'>
                                    <a className='text-white text-decoration-none' href=" ">Sustainable Supply Chain</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                        <div>
                            <h3 className='text-white fw-lighter mb-4'>ABOUT US</h3>
                            <ul>
                                <li className='text-white'>
                                    <a className='text-white text-decoration-none' href=" ">Company Info</a>
                                </li>
                                <li className='text-white'>
                                    <a className='text-white text-decoration-none' href=" ">Business Area</a>
                                </li>
                                <li className='text-white'>
                                    <a className='text-white text-decoration-none' href=" ">Brand Identity</a>
                                </li>
                                <li className='text-white'>
                                    <a className='text-white text-decoration-none' href=" ">Ethics</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                        <div>
                            <h3 className='text-white text-center fw-lighter mb-4'>TOP BRAND</h3>
                            <ul className='corporate-photo'>
                                <img src={brand1} alt="" />
                                <img src={brand2} alt="" />
                                <img src={brand3} alt="" />
                                <img src={brand4} alt="" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center text-light'><small>Copyright &copy; {new Date().getFullYear()} AC Stock House. All Rights Reserved. Designed By K M Mohiuddin Patwary</small></p>
            
        </footer>
    );
};

export default Footer;