import React, {useState} from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages

import Header from './Header';
import HomePageContent from './pages/HomePage/HomePageContent';
import Shop from './pages/Shop/Shop.jsx';
import About from './pages/About/About.jsx';
import Cart from './pages/Cart/Cart.jsx';

import MotherBoard from './pages/Shop/MotherBoard.jsx';
import VideoCards from './pages/Shop/VideoCards.jsx';
import Processors from './pages/Shop/Processors.jsx';
import Hdd from './pages/Shop/Hdd.jsx';
import Sdd from './pages/Shop/Sdd.jsx';
import Cases from './pages/Shop/Cases.jsx';
import Coolers from './pages/Shop/Coolers.jsx';
import ShopLeft from './pages/Shop/ShopLeft.jsx';
import ItemCart from './pages/Shop/ItemCart.jsx';

function App() {
  const [arrayItem, setArrayItem] = useState([]);
  const addCartItem = (cartItem) => {
    let newArray = [...arrayItem];
    let newArray2 = [...newArray, cartItem];
    if(arrayItem.includes(cartItem)) {
      
    } else {
      setArrayItem(newArray2);
    }
  };
  const modernArray = (array) => {
    setArrayItem(array);
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path=":anyId" element={<ItemCart addedNewCart={addCartItem}/>} />
        <Route path="/" element={<HomePageContent />} />
        <Route path="about" element={<About />}></Route>
        <Route path="shop" element={<Shop />}>
          <Route path="" element={<MotherBoard />} />
          <Route path="motherboard" element={<MotherBoard />}>
          </Route>
          <Route path="videocards" element={<VideoCards />}/>
          <Route path="processors" element={<Processors />}/>
          <Route path="vinchester-hdd" element={<Hdd />}/>
          <Route path="vinchester-ssd" element={<Sdd />}/>
          <Route path="cases" element={<Cases />}/>
          <Route path="coolers" element={<Coolers />}/>
        </Route>
        <Route path="cart"  element={<Cart modernize={modernArray} cartList={arrayItem}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
