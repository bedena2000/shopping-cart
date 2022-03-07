import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import cartLogo from '../../img/main/cart-svgrepo-com.svg';

import Header from '../../Header.jsx';

const About = () => {
  return (
    <>
    
    <div className="about">
      <p className="about-title">
        this is not a real store, the goods are not sold here and this is all done for the sake of training
      </p>
    </div>
    </>
  )
};

export default About;