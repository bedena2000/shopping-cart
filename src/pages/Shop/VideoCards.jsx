import React from 'react';

import motherboard1 from '../../img/videocards/agp-video-card-gd9e02b582_640.jpg';
import motherboard2 from '../../img/videocards/graphic-7.png';
import motherboard3 from '../../img/videocards/graphic-8.png';
import motherboard4 from '../../img/videocards/graphic-9.png';
import motherboard5 from '../../img/videocards/graphic-10.png';
import motherboard6 from '../../img/videocards/graphic-11.png';
import motherboard7 from '../../img/videocards/graphic-12.png';
import motherboard8 from '../../img/videocards/nvidia-gb60032851_640.jpg';
import motherboard9 from '../../img/videocards/pc-gf57b044dc_640.jpg';
import motherboard10 from '../../img/videocards/sapphire-gf7ae6b248_640.jpg';
import motherboard11 from '../../img/videocards/video-card-g03f94eeb4_640.jpg';
import motherboard12 from '../../img/videocards/video-card-g3e9e07333_640.jpg';
import MotherBoardCard from './MotherBoardCard.jsx';

const VideoCards = () => {
  return (
    <div className="videocard shop-page-items-board">
      <MotherBoardCard imageUrl={motherboard1} imageName='videocard-1' itemPath='/videocard-1'/>
      <MotherBoardCard imageUrl={motherboard2} imageName='videocard-2' itemPath='/videocard-2'/>
      <MotherBoardCard imageUrl={motherboard3} imageName='videocard-3' itemPath='/videocard-3'/>
      <MotherBoardCard imageUrl={motherboard4} imageName='videocard-4' itemPath='/videocard-4'/>
      
      <MotherBoardCard imageUrl={motherboard5} imageName='videocard-5' itemPath='/videocard-5'/>
      <MotherBoardCard imageUrl={motherboard6} imageName='videocard-6' itemPath='/videocard-6'/>
      <MotherBoardCard imageUrl={motherboard7} imageName='videocard-7' itemPath='/videocard-7'/>
      <MotherBoardCard imageUrl={motherboard8} imageName='videocard-8' itemPath='/videocard-8'/>
      
      <MotherBoardCard imageUrl={motherboard9} imageName='videocard-9' itemPath='/videocard-9'/>
      <MotherBoardCard imageUrl={motherboard10} imageName='videocard-10' itemPath='/videocard-10'/>
      <MotherBoardCard imageUrl={motherboard11} imageName='videocard-11' itemPath='/videocard-11'/>
      <MotherBoardCard imageUrl={motherboard12} imageName='videocard-12' itemPath='/videocard-12'/>
    </div>
  )
};

export default VideoCards;