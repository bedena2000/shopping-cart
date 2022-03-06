import React from 'react';

import motherboard1 from '../../img/Winchester (HDD)/backup-g496cc9a2f_640.jpg';
import motherboard2 from '../../img/Winchester (HDD)/computer-science-g11d70aaa5_640.jpg';
import motherboard3 from '../../img/Winchester (HDD)/hard-disk-g4dd5bc0d3_640.jpg';
import motherboard4 from '../../img/Winchester (HDD)/hard-disk-geef5ed31c_640.jpg';
import motherboard5 from '../../img/Winchester (HDD)/hard-drive-g7a92f36af_640.jpg';
import motherboard6 from '../../img/Winchester (HDD)/hard-drive-g496b9c8b0_640.jpg';
import motherboard7 from '../../img/Winchester (HDD)/hard-drive-ga08f14cf7_640.jpg';
import motherboard8 from '../../img/Winchester (HDD)/hard-g5ee21209b_640.png';
import motherboard9 from '../../img/Winchester (HDD)/hardware-gc486c28f6_640.jpg';
import motherboard10 from '../../img/Winchester (HDD)/hdd-g4e8bdf99a_640.png';
import motherboard11 from '../../img/Winchester (HDD)/hdd-gc0fa330c8_640.jpg';
import motherboard12 from '../../img/Winchester (HDD)/hdd-gc6bfc3b24_640.jpg';
import MotherBoardCard from './MotherBoardCard.jsx';

const Hdd = () => {
  return (
    <div className="videocard shop-page-items-board">
      <MotherBoardCard imageUrl={motherboard1} imageName='HDD1' itemPath='/hdd-1'/>
      <MotherBoardCard imageUrl={motherboard2} imageName='HDD2' itemPath='/hdd-2'/>
      <MotherBoardCard imageUrl={motherboard3} imageName='HDD3' itemPath='/hdd-3'/>
      <MotherBoardCard imageUrl={motherboard4} imageName='HDD4' itemPath='/hdd-4'/>
      
      <MotherBoardCard imageUrl={motherboard5} imageName='HDD5' itemPath='/hdd-5'/>
      <MotherBoardCard imageUrl={motherboard6} imageName='HDD6' itemPath='/hdd-6'/>
      <MotherBoardCard imageUrl={motherboard7} imageName='HDD7' itemPath='/hdd-7'/>
      <MotherBoardCard imageUrl={motherboard8} imageName='HDD8' itemPath='/hdd-8'/>
      
      <MotherBoardCard imageUrl={motherboard9} imageName='HDD9' itemPath='/hdd-9'/>
      <MotherBoardCard imageUrl={motherboard10} imageName='HDD10' itemPath='/hdd-10'/>
      <MotherBoardCard imageUrl={motherboard11} imageName='HDD11' itemPath='/hdd-11'/>
      <MotherBoardCard imageUrl={motherboard12} imageName='HDD12' itemPath='/hdd-12'/>
    </div>
  )
};

export default Hdd;