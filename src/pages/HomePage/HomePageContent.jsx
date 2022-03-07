import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

const HomePageContent = () => {
  return (
    <div className="homepage-content"> 
      <h1 className="homepage-title">
        Fakeshop - any computer parts  
      </h1>
      <Link to="/shop" className="homepage-btn">Shop</Link>
    </div>
  )
};

export default HomePageContent;