import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

const ShopLeftLink = ({linkName, linkPath}) => {
  return (
    <NavLink to={linkPath} className="shop-link">{linkName}</NavLink> 
  )
};

export default ShopLeftLink;