import React from 'react';

import motherboard1 from '../../img/Winchester (SSD)/ssd-1.jpg';
import motherboard2 from '../../img/Winchester (SSD)/ssd-2.jpg';
import motherboard3 from '../../img/Winchester (SSD)/ssd-3.jpg';
import motherboard4 from '../../img/Winchester (SSD)/ssd-4.jpg';
import motherboard5 from '../../img/Winchester (SSD)/ssd-5.jpg';
import motherboard6 from '../../img/Winchester (SSD)/ssd-6.jpg';
import motherboard7 from '../../img/Winchester (SSD)/ssd-7.jpg';
import motherboard8 from '../../img/Winchester (SSD)/ssd-8.jpg';
import motherboard9 from '../../img/Winchester (SSD)/ssd-9.jpg';
import motherboard10 from '../../img/Winchester (SSD)/ssd-10.jpg';
import motherboard11 from '../../img/Winchester (SSD)/ssd-11.jpg';
import motherboard12 from '../../img/Winchester (SSD)/ssd-12.jpg';
import MotherBoardCard from './MotherBoardCard.jsx';

const Sdd = () => {
  return (
    <div className="videocard shop-page-items-board">
      <MotherBoardCard imageUrl={motherboard1} imageName='SSD1' itemPath='/ssd-1'/>
      <MotherBoardCard imageUrl={motherboard2} imageName='SSD2' itemPath='/ssd-1'/>
      <MotherBoardCard imageUrl={motherboard3} imageName='SSD3' itemPath='/ssd-1'/>
      <MotherBoardCard imageUrl={motherboard4} imageName='SSD4' itemPath='/ssd-1'/>
      
      <MotherBoardCard imageUrl={motherboard5} imageName='SSD5' itemPath='/ssd-1'/>
      <MotherBoardCard imageUrl={motherboard6} imageName='SSD6' itemPath='/ssd-1'/>
      <MotherBoardCard imageUrl={motherboard7} imageName='SSD7' itemPath='/ssd-1'/>
      <MotherBoardCard imageUrl={motherboard8} imageName='SSD8' itemPath='/ssd-1'/>
      
      <MotherBoardCard imageUrl={motherboard9} imageName='SSD9' itemPath='/ssd-1'/>
      <MotherBoardCard imageUrl={motherboard10} imageName='SSD10' itemPath='/ssd-1'/>
      <MotherBoardCard imageUrl={motherboard11} imageName='SSD11' itemPath='/ssd-1'/>
      <MotherBoardCard imageUrl={motherboard12} imageName='SSD12' itemPath='/ssd-1'/>
    </div>
  )
};

export default Sdd;