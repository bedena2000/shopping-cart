import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import ShopLeftLink from './ShopLeftLink.jsx';

const ShopLeft = () => {
  return (
    <div className="shop-left">
       <ShopLeftLink linkName="motherboard" linkPath="motherboard"/>
       <ShopLeftLink linkName="videocards" linkPath="videocards"/>
       <ShopLeftLink linkName="processors" linkPath="processors"/>
       <ShopLeftLink linkName="vinchester-hdd" linkPath="vinchester-hdd"/>
       <ShopLeftLink linkName="vinchester-ssd" linkPath="vinchester-ssd"/>
       <ShopLeftLink linkName="cases" linkPath="cases"/>
       <ShopLeftLink linkName="coolers" linkPath="coolers"/>
    </div>
  )
};

export default ShopLeft;