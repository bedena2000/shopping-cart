import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useParams } from 'react-router-dom';

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

import videocard1 from '../../img/videocards/agp-video-card-gd9e02b582_640.jpg';
import videocard2 from '../../img/videocards/graphic-7.png';
import videocard3 from '../../img/videocards/graphic-8.png';
import videocard4 from '../../img/videocards/graphic-9.png';
import videocard5 from '../../img/videocards/graphic-10.png';
import videocard6 from '../../img/videocards/graphic-11.png';
import videocard7 from '../../img/videocards/graphic-12.png';
import videocard8 from '../../img/videocards/nvidia-gb60032851_640.jpg';
import videocard9 from '../../img/videocards/pc-gf57b044dc_640.jpg';
import videocard10 from '../../img/videocards/sapphire-gf7ae6b248_640.jpg';
import videocard11 from '../../img/videocards/video-card-g03f94eeb4_640.jpg';
import videocard12 from '../../img/videocards/video-card-g3e9e07333_640.jpg';

import processors1 from '../../img/Processors/pexels-alessandro-oliverio-1472443.jpg';
import processors2 from '../../img/Processors/pexels-ali-arapoğlu-4432037.jpg';
import processors3 from '../../img/Processors/pexels-athena-2582935.jpg';
import processors4 from '../../img/Processors/pexels-jeremy-waterhouse-3665442.jpg';
import processors5 from '../../img/Processors/pexels-jeremy-waterhouse-3665443.jpg';
import processors6 from '../../img/Processors/pexels-pok-rie-1432675.jpg';
import processors7 from '../../img/Processors/pexels-pok-rie-1432676.jpg';
import processors8 from '../../img/Processors/pexels-pok-rie-1432680.jpg';
import processors9 from '../../img/Processors/pexels-pok-rie-1432797.jpg';
import processors10 from '../../img/Processors/pexels-rūdolfs-klintsons-7102037.jpg';
import processors11 from '../../img/Processors/pexels-rūdolfs-klintsons-7174676.jpg';
import processors12 from '../../img/Processors/pexels-sergei-starostin-6636463.jpg';

import hdd1 from '../../img/Winchester (HDD)/backup-g496cc9a2f_640.jpg';
import hdd2 from '../../img/Winchester (HDD)/computer-science-g11d70aaa5_640.jpg';
import hdd3 from '../../img/Winchester (HDD)/hard-disk-g4dd5bc0d3_640.jpg';
import hdd4 from '../../img/Winchester (HDD)/hard-disk-geef5ed31c_640.jpg';
import hdd5 from '../../img/Winchester (HDD)/hard-drive-g7a92f36af_640.jpg';
import hdd6 from '../../img/Winchester (HDD)/hard-drive-g496b9c8b0_640.jpg';
import hdd7 from '../../img/Winchester (HDD)/hard-drive-ga08f14cf7_640.jpg';
import hdd8 from '../../img/Winchester (HDD)/hard-g5ee21209b_640.png';
import hdd9 from '../../img/Winchester (HDD)/hardware-gc486c28f6_640.jpg';
import hdd10 from '../../img/Winchester (HDD)/hdd-g4e8bdf99a_640.png';
import hdd11 from '../../img/Winchester (HDD)/hdd-gc0fa330c8_640.jpg';
import hdd12 from '../../img/Winchester (HDD)/hdd-gc6bfc3b24_640.jpg';

import ssd1 from '../../img/Winchester (SSD)/ssd-1.jpg';
import ssd2 from '../../img/Winchester (SSD)/ssd-2.jpg';
import ssd3 from '../../img/Winchester (SSD)/ssd-3.jpg';
import ssd4 from '../../img/Winchester (SSD)/ssd-4.jpg';
import ssd5 from '../../img/Winchester (SSD)/ssd-5.jpg';
import ssd6 from '../../img/Winchester (SSD)/ssd-6.jpg';
import ssd7 from '../../img/Winchester (SSD)/ssd-7.jpg';
import ssd8 from '../../img/Winchester (SSD)/ssd-8.jpg';
import ssd9 from '../../img/Winchester (SSD)/ssd-9.jpg';
import ssd10 from '../../img/Winchester (SSD)/ssd-10.jpg';
import ssd11 from '../../img/Winchester (SSD)/ssd-11.jpg';
import ssd12 from '../../img/Winchester (SSD)/ssd-12.jpg';

import case1 from '../../img/Cases/case-1.jpg';
import case2 from '../../img/Cases/case-2.jpg';
import case3 from '../../img/Cases/case-3.jpg';
import case4 from '../../img/Cases/case-4.jpg';
import case5 from '../../img/Cases/case-5.jpg';
import case6 from '../../img/Cases/case-6.jpg';
import case7 from '../../img/Cases/case-7.jpg';
import case8 from '../../img/Cases/case-8.jpg';
import case9 from '../../img/Cases/case-9.jpg';
import case10 from '../../img/Cases/case-10.jpg';
import case11 from '../../img/Cases/case-11.jpg';
import case12 from '../../img/Cases/case-12.jpg';

import cooler1 from '../../img/Coolers/cooler-1.jpg';
import cooler2 from '../../img/Coolers/cooler-2.jpg';
import cooler3 from '../../img/Coolers/cooler-3.jpg';
import cooler4 from '../../img/Coolers/cooler-4.jpg';
import cooler5 from '../../img/Coolers/cooler-5.webp';
import cooler6 from '../../img/Coolers/cooler-6.jpg';
import cooler7 from '../../img/Coolers/cooler-7.png';
import cooler8 from '../../img/Coolers/cooler-8.jpg';
import cooler9 from '../../img/Coolers/cooler-9.png';
import cooler10 from '../../img/Coolers/cooler-10.jpg';
import cooler11 from '../../img/Coolers/cooler-11.jpg';
import cooler12 from '../../img/Coolers/cooler-12.jpg';

const data = [
  
  {
    name: "motherboard-1",
    cost: "25",
    imageUrl: motherboard1
  },
  {
    name: "motherboard-2",
    cost: "30",
    imageUrl: motherboard2
  },
  {
    name: "motherboard-3",
    cost: "100",
    imageUrl: motherboard3
  },
  {
    name: "motherboard-4",
    cost: "10",
    imageUrl: motherboard4
  },
  {
    name: "motherboard-5",
    cost: "14.99",
    imageUrl: motherboard5
  },
  {
    name: "motherboard-6",
    cost: "13.99",
    imageUrl: motherboard6
  },
  {
    name: "motherboard-7",
    cost: "99.99",
    imageUrl: motherboard7
  },
  {
    name: "motherboard-8",
    cost: "102.99",
    imageUrl: motherboard8
  },
  {
    name: "motherboard-9",
    cost: "16.99",
    imageUrl: motherboard9
  },
  {
    name: "motherboard-10",
    cost: "205.99",
    imageUrl: motherboard10
  },
  {
    name: "motherboard-11",
    cost: "199.99",
    imageUrl: motherboard11
  },
  {
    name: "motherboard-12",
    cost: "16.99",
    imageUrl: motherboard12
  },
  
  {
    name: "videocard-1",
    cost: "25",
    imageUrl: videocard1
  },
  {
    name: "videocard-2",
    cost: "30",
    imageUrl: videocard2
  },
  {
    name: "videocard-3",
    cost: "100",
    imageUrl: videocard3
  },
  {
    name: "videocard-4",
    cost: "10",
    imageUrl: videocard4
  },
  {
    name: "videocard-5",
    cost: "14.99",
    imageUrl: videocard5
  },
  {
    name: "videocard-6",
    cost: "13.99",
    imageUrl: videocard6
  },
  {
    name: "videocard-7",
    cost: "99.99",
    imageUrl: videocard7
  },
  {
    name: "videocard-8",
    cost: "102.99",
    imageUrl: videocard8
  },
  {
    name: "videocard-9",
    cost: "16.99",
    imageUrl: videocard9
  },
  {
    name: "videocard-10",
    cost: "205.99",
    imageUrl: videocard10
  },
  {
    name: "videocard-11",
    cost: "199.99",
    imageUrl: videocard11
  },
  {
    name: "videocard-12",
    cost: "16.99",
    imageUrl: videocard12
  },
  
  {
    name: "processor-1",
    cost: "25",
    imageUrl: processors1
  },
  {
    name: "processor-2",
    cost: "30",
    imageUrl: processors2
  },
  {
    name: "processor-3",
    cost: "100",
    imageUrl: processors3
  },
  {
    name: "processor-4",
    cost: "10",
    imageUrl: processors4
  },
  {
    name: "processor-5",
    cost: "14.99",
    imageUrl: processors5
  },
  {
    name: "processor-6",
    cost: "13.99",
    imageUrl: processors6
  },
  {
    name: "processor-7",
    cost: "99.99",
    imageUrl: processors7
  },
  {
    name: "processor-8",
    cost: "102.99",
    imageUrl: processors8
  },
  {
    name: "processor-9",
    cost: "16.99",
    imageUrl: processors9
  },
  {
    name: "processor-10",
    cost: "205.99",
    imageUrl: processors10
  },
  {
    name: "processor-11",
    cost: "199.99",
    imageUrl: processors11
  },
  {
    name: "processor-12",
    cost: "16.99",
    imageUrl: processors12
  },
  
  {
    name: "hdd-1",
    cost: "25",
    imageUrl: hdd1
  },
  {
    name: "hdd-2",
    cost: "30",
    imageUrl: hdd2
  },
  {
    name: "hdd-3",
    cost: "100",
    imageUrl: hdd3
  },
  {
    name: "hdd-4",
    cost: "10",
    imageUrl: hdd4
  },
  {
    name: "hdd-5",
    cost: "14.99",
    imageUrl: hdd5
  },
  {
    name: "hdd-6",
    cost: "13.99",
    imageUrl: hdd6
  },
  {
    name: "hdd-7",
    cost: "99.99",
    imageUrl: hdd7
  },
  {
    name: "hdd-8",
    cost: "102.99",
    imageUrl: hdd8
  },
  {
    name: "hdd-9",
    cost: "16.99",
    imageUrl: hdd9
  },
  {
    name: "hdd-10",
    cost: "205.99",
    imageUrl: hdd10
  },
  {
    name: "hdd-11",
    cost: "199.99",
    imageUrl: hdd11
  },
  {
    name: "hdd-12",
    cost: "16.99",
    imageUrl: hdd12
  },
  
  {
    name: "ssd-1",
    cost: "25",
    imageUrl: ssd1
  },
  {
    name: "ssd-2",
    cost: "30",
    imageUrl: ssd2
  },
  {
    name: "ssd-3",
    cost: "100",
    imageUrl: ssd3
  },
  {
    name: "ssd-4",
    cost: "10",
    imageUrl: ssd4
  },
  {
    name: "ssd-5",
    cost: "14.99",
    imageUrl: ssd5
  },
  {
    name: "ssd-6",
    cost: "13.99",
    imageUrl: ssd6
  },
  {
    name: "ssd-7",
    cost: "99.99",
    imageUrl: ssd7
  },
  {
    name: "ssd-8",
    cost: "102.99",
    imageUrl: ssd8
  },
  {
    name: "ssd-9",
    cost: "16.99",
    imageUrl: ssd9
  },
  {
    name: "ssd-10",
    cost: "205.99",
    imageUrl: ssd10
  },
  {
    name: "ssd-11",
    cost: "199.99",
    imageUrl: ssd11
  },
  {
    name: "ssd-12",
    cost: "16.99",
    imageUrl: ssd12
  },
  
  {
    name: "case-1",
    cost: "25",
    imageUrl: case1
  },
  {
    name: "case-2",
    cost: "30",
    imageUrl: case2
  },
  {
    name: "case-3",
    cost: "100",
    imageUrl: case3
  },
  {
    name: "case-4",
    cost: "10",
    imageUrl: case4
  },
  {
    name: "case-5",
    cost: "14.99",
    imageUrl: case5
  },
  {
    name: "case-6",
    cost: "13.99",
    imageUrl: case6
  },
  {
    name: "case-7",
    cost: "99.99",
    imageUrl: case7
  },
  {
    name: "case-8",
    cost: "102.99",
    imageUrl: case8
  },
  {
    name: "case-9",
    cost: "16.99",
    imageUrl: case9
  },
  {
    name: "case-10",
    cost: "205.99",
    imageUrl: case10
  },
  {
    name: "case-11",
    cost: "199.99",
    imageUrl: case11
  },
  {
    name: "case-12",
    cost: "16.99",
    imageUrl: case12
  },
  
  {
    name: "cooler-1",
    cost: "25",
    imageUrl: cooler1
  },
  {
    name: "cooler-2",
    cost: "30",
    imageUrl: cooler2
  },
  {
    name: "cooler-3",
    cost: "100",
    imageUrl: cooler3
  },
  {
    name: "cooler-4",
    cost: "10",
    imageUrl: cooler4
  },
  {
    name: "cooler-5",
    cost: "14.99",
    imageUrl: cooler5
  },
  {
    name: "cooler-6",
    cost: "13.99",
    imageUrl: cooler6
  },
  {
    name: "cooler-7",
    cost: "99.99",
    imageUrl: cooler7
  },
  {
    name: "cooler-8",
    cost: "102.99",
    imageUrl: cooler8
  },
  {
    name: "cooler-9",
    cost: "16.99",
    imageUrl: cooler9
  },
  {
    name: "cooler-10",
    cost: "205.99",
    imageUrl: cooler10
  },
  {
    name: "cooler-11",
    cost: "199.99",
    imageUrl: cooler11
  },
  {
    name: "cooler-12",
    cost: "16.99",
    imageUrl: cooler12
  },
  
];




const ItemCart = ({addedNewCart}) => {
  const [itemArray, setItemArray] = useState([]);
  let params = useParams();
  let currentItem = data.filter(item => item.name === params.anyId);
  return (
    <div className="card-wrapper">
      <div className="container">
        <div className="card-item">
          <img src={currentItem[0].imageUrl} alt={currentItem[0].name} className="card-item-src" />  
          <div className="card-item-info">
            <div className="card-top">
              <h2 className="card-item-name">{currentItem[0].name}</h2>
              <p className="card-item-cost">{currentItem[0].cost}$</p>  
            </div>
            <button className="card-item-button" onClick={() => {
              addedNewCart(currentItem[0]);
            }}>Add To Cart</button>  
          </div>   
        </div>
      </div>
    </div>
  )
};

export default ItemCart;