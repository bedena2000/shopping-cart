import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import cartLogo from './img/main/cart-svgrepo-com.svg';

const Header = () => {
  return (
    <>
    <div className="header">
      <div className="container header-wrapper">
        <h2 className="header-title">fakeshop</h2>
        <div className="header-menu">
          <NavLink className="header-link" to="/">Home</NavLink>
          <NavLink className="header-link" to="/shop">Shop</NavLink>
          <NavLink className="header-link" to="/about">About</NavLink>
          <NavLink className="header-link-cart" to="/cart"> 
            <img src={cartLogo} alt="cartLogo" className="header-logo" />
          </NavLink>
        </div>  
      </div>  
    </div>
    </>
  )
};

export default Header;
