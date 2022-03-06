import React from 'react';

import motherboard1 from '../../img/Coolers/cooler-1.jpg';
import motherboard2 from '../../img/Coolers/cooler-2.jpg';
import motherboard3 from '../../img/Coolers/cooler-3.jpg';
import motherboard4 from '../../img/Coolers/cooler-4.jpg';
import motherboard5 from '../../img/Coolers/cooler-5.webp';
import motherboard6 from '../../img/Coolers/cooler-6.jpg';
import motherboard7 from '../../img/Coolers/cooler-7.png';
import motherboard8 from '../../img/Coolers/cooler-8.jpg';
import motherboard9 from '../../img/Coolers/cooler-9.png';
import motherboard10 from '../../img/Coolers/cooler-10.jpg';
import motherboard11 from '../../img/Coolers/cooler-11.jpg';
import motherboard12 from '../../img/Coolers/cooler-12.jpg';
import MotherBoardCard from './MotherBoardCard.jsx';

const Coolers = () => {
  return (
    <div className="videocard shop-page-items-board">
      <MotherBoardCard imageUrl={motherboard1} imageName='Coolers-1' itemPath='/cooler-1'/>
      <MotherBoardCard imageUrl={motherboard2} imageName='Coolers-2' itemPath='/cooler-2'/>
      <MotherBoardCard imageUrl={motherboard3} imageName='Coolers-3' itemPath='/cooler-3'/>
      <MotherBoardCard imageUrl={motherboard4} imageName='Coolers-4' itemPath='/cooler-4'/>
      
      <MotherBoardCard imageUrl={motherboard5} imageName='Coolers-5' itemPath='/cooler-5'/>
      <MotherBoardCard imageUrl={motherboard6} imageName='Coolers-6' itemPath='/cooler-6'/>
      <MotherBoardCard imageUrl={motherboard7} imageName='Coolers-7' itemPath='/cooler-7'/>
      <MotherBoardCard imageUrl={motherboard8} imageName='Coolers-8' itemPath='/cooler-8'/>
      
      <MotherBoardCard imageUrl={motherboard9} imageName='Coolers-9' itemPath='/cooler-9'/>
      <MotherBoardCard imageUrl={motherboard10} imageName='Coolers-10' itemPath='/cooler-10'/>
      <MotherBoardCard imageUrl={motherboard11} imageName='Coolers-11' itemPath='/cooler-11'/>
      <MotherBoardCard imageUrl={motherboard12} imageName='Coolers-12' itemPath='/cooler-12'/>
    </div>
  )
};

export default Coolers;