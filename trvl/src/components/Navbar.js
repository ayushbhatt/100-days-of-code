import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import trvllogo from '../route-solid.svg';

export default function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo">
                        TRVL <img src={trvllogo} alt="logo" height="15" width="15" />
                    </Link>
                </div>
            </nav>
        </>
    );
}