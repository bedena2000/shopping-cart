import React from 'react';

import motherboard1 from '../../img/Cases/case-1.jpg';
import motherboard2 from '../../img/Cases/case-2.jpg';
import motherboard3 from '../../img/Cases/case-3.jpg';
import motherboard4 from '../../img/Cases/case-4.jpg';
import motherboard5 from '../../img/Cases/case-5.jpg';
import motherboard6 from '../../img/Cases/case-6.jpg';
import motherboard7 from '../../img/Cases/case-7.jpg';
import motherboard8 from '../../img/Cases/case-8.jpg';
import motherboard9 from '../../img/Cases/case-9.jpg';
import motherboard10 from '../../img/Cases/case-10.jpg';
import motherboard11 from '../../img/Cases/case-11.jpg';
import motherboard12 from '../../img/Cases/case-12.jpg';
import MotherBoardCard from './MotherBoardCard.jsx';

const Cases = () => {
  return (
    <div className="videocard shop-page-items-board">
      <MotherBoardCard imageUrl={motherboard1} imageName='Case-1' itemPath='/case-1'/>
      <MotherBoardCard imageUrl={motherboard2} imageName='Case-2' itemPath='/case-2'/>
      <MotherBoardCard imageUrl={motherboard3} imageName='Case-3' itemPath='/case-3'/>
      <MotherBoardCard imageUrl={motherboard4} imageName='Case-4' itemPath='/case-4'/>
      
      <MotherBoardCard imageUrl={motherboard5} imageName='Case-5' itemPath='/case-5'/>
      <MotherBoardCard imageUrl={motherboard6} imageName='Case-6' itemPath='/case-6'/>
      <MotherBoardCard imageUrl={motherboard7} imageName='Case-7' itemPath='/case-7'/>
      <MotherBoardCard imageUrl={motherboard8} imageName='Case-8' itemPath='/case-8'/>
      
      <MotherBoardCard imageUrl={motherboard9} imageName='Case-9' itemPath='/case-9'/>
      <MotherBoardCard imageUrl={motherboard10} imageName='Case-10' itemPath='/case-10'/>
      <MotherBoardCard imageUrl={motherboard11} imageName='Case-11' itemPath='/case-11'/>
      <MotherBoardCard imageUrl={motherboard12} imageName='Case-12' itemPath='/case-12'/>
    </div>
  )
};

export default Cases;