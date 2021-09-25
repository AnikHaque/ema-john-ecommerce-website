import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div>
            <img src={logo} className="logo"></img>
            <div className="header-details">
                <a href="/home">Shop</a>
                <a href="/home">Order Review</a>
                <a href="/home">Manage Inventory Here</a>
                <div>
                    <input></input>
                </div>
            </div>
            
        </div>
    );
};

export default Header;