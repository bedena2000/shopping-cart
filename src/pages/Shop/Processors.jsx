import React from 'react';

import motherboard1 from '../../img/Processors/pexels-alessandro-oliverio-1472443.jpg';
import motherboard2 from '../../img/Processors/pexels-ali-arapoğlu-4432037.jpg';
import motherboard3 from '../../img/Processors/pexels-athena-2582935.jpg';
import motherboard4 from '../../img/Processors/pexels-jeremy-waterhouse-3665442.jpg';
import motherboard5 from '../../img/Processors/pexels-jeremy-waterhouse-3665443.jpg';
import motherboard6 from '../../img/Processors/pexels-pok-rie-1432675.jpg';
import motherboard7 from '../../img/Processors/pexels-pok-rie-1432676.jpg';
import motherboard8 from '../../img/Processors/pexels-pok-rie-1432680.jpg';
import motherboard9 from '../../img/Processors/pexels-pok-rie-1432797.jpg';
import motherboard10 from '../../img/Processors/pexels-rūdolfs-klintsons-7102037.jpg';
import motherboard11 from '../../img/Processors/pexels-rūdolfs-klintsons-7174676.jpg';
import motherboard12 from '../../img/Processors/pexels-sergei-starostin-6636463.jpg';
import MotherBoardCard from './MotherBoardCard.jsx';

const Processors = () => {
  return (
    <div className="videocard shop-page-items-board">
      <MotherBoardCard imageUrl={motherboard1} imageName='Processors1'  itemPath='/processor-1'/>
      <MotherBoardCard imageUrl={motherboard2} imageName='Processors2'  itemPath='/processor-2'/>
      <MotherBoardCard imageUrl={motherboard3} imageName='Processors3'  itemPath='/processor-3'/>
      <MotherBoardCard imageUrl={motherboard4} imageName='Processors4'  itemPath='/processor-4'/>
      
      <MotherBoardCard imageUrl={motherboard5} imageName='Processors5' itemPath='/processor-5'/>
      <MotherBoardCard imageUrl={motherboard6} imageName='Processors6' itemPath='/processor-6'/>
      <MotherBoardCard imageUrl={motherboard7} imageName='Processors7' itemPath='/processor-7'/>
      <MotherBoardCard imageUrl={motherboard8} imageName='Processors8' itemPath='/processor-8'/>
      
      <MotherBoardCard imageUrl={motherboard9} imageName='Processors9' itemPath='/processor-9'/>
      <MotherBoardCard imageUrl={motherboard10} imageName='Processors10' itemPath='/processor-10'/>
      <MotherBoardCard imageUrl={motherboard11} imageName='Processors11' itemPath='/processor-11'/>
      <MotherBoardCard imageUrl={motherboard12} imageName='Processors12' itemPath='/processor-12'/>
    </div>
  )
};

export default Processors;