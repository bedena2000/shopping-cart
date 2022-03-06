import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import About from '../About/About.jsx';
import MotherBoard from './MotherBoard.jsx';
import VideoCards from './VideoCards.jsx';
import Processors from './Processors.jsx';
import Hdd from './Hdd.jsx';
import Sdd from './Sdd.jsx';
import Cases from './Cases.jsx';
import Coolers from './Coolers.jsx';
import ShopLeft from './ShopLeft.jsx';

const Shop = () => {
  return (
    <div className="shop-page">
      <div className="container shop-page-wrapper">
         <ShopLeft />
         <Routes>
           <Route path="/" element={<MotherBoard />}/>
           <Route path="motherboard" element={<MotherBoard />}/>
           <Route path="videocards" element={<VideoCards />}/>
           <Route path="processors" element={<Processors />}/>
           <Route path="vinchester-hdd" element={<Hdd />}/>
           <Route path="vinchester-ssd" element={<Sdd />}/>
           <Route path="cases" element={<Cases />}/>
           <Route path="coolers" element={<Coolers />}/>
         </Routes>
      </div>
      
    </div>
  )
};

export default Shop;