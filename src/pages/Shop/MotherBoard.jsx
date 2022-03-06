import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import motherboard1 from '../../img/motherboards/pexels-alessandro-oliverio-1472443.jpg';
import motherboard2 from '../../img/motherboards/pexels-jeremy-waterhouse-3665442.jpg';
import motherboard3 from '../../img/motherboards/pexels-jéshoots-4316.jpg';
import motherboard4 from '../../img/motherboards/pexels-miguel-á-padriñán-3520665.jpg';
import motherboard5 from '../../img/motherboards/pexels-mikhail-nilov-8108726.jpg';
import motherboard6 from '../../img/motherboards/pexels-pixabay-163125.jpg';
import motherboard7 from '../../img/motherboards/pexels-pok-rie-1432673.jpg';
import motherboard8 from '../../img/motherboards/pexels-pok-rie-1432676.jpg';
import motherboard9 from '../../img/motherboards/pexels-pok-rie-1432678.jpg';
import motherboard10 from '../../img/motherboards/pexels-pok-rie-1432680.jpg';
import motherboard11 from '../../img/motherboards/pexels-shawn-stutzman-1010485.jpg';
import motherboard12 from '../../img/motherboards/pexels-valentine-tanasovich-2588756.jpg';
import MotherBoardCard from './MotherBoardCard.jsx';

const MotherBoard = () => {
  return (
    <div className="motherboards shop-page-items-board">
      <MotherBoardCard imageUrl={motherboard1} imageName='motherboard1' itemPath='/motherboard-1'/>
      <MotherBoardCard imageUrl={motherboard2} imageName='motherboard2' itemPath='/motherboard-2'/>
      <MotherBoardCard imageUrl={motherboard3} imageName='motherboard3' itemPath='/motherboard-3'/>
      <MotherBoardCard imageUrl={motherboard4} imageName='motherboard4' itemPath='/motherboard-4'/>
      
      <MotherBoardCard imageUrl={motherboard5} imageName='motherboard5' itemPath='/motherboard-5'/>
      <MotherBoardCard imageUrl={motherboard6} imageName='motherboard6' itemPath='/motherboard-6'/>
      <MotherBoardCard imageUrl={motherboard7} imageName='motherboard7' itemPath='/motherboard-7'/>
      <MotherBoardCard imageUrl={motherboard8} imageName='motherboard8' itemPath='/motherboard-8'/>
      
      <MotherBoardCard imageUrl={motherboard9} imageName='motherboard9' itemPath='/motherboard-9'/>
      <MotherBoardCard imageUrl={motherboard10} imageName='motherboard10' itemPath='/motherboard-10'/>
      <MotherBoardCard imageUrl={motherboard11} imageName='motherboard11' itemPath='/motherboard-11'/>
      <MotherBoardCard imageUrl={motherboard12} imageName='motherboard12' itemPath='/motherboard-12'/>
    </div>
  )
};

export default MotherBoard;