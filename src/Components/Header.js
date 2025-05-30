import React from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../assets/menu.png';

const Header = () => {
    return (
        <header>
            <img src={menuIcon} alt="Menu" className="menu" />
            <h1>Your Portfolio</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;