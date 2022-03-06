import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages

import Header from './Header';
import HomePageContent from './pages/HomePage/HomePageContent';
import Shop from './pages/Shop/Shop.jsx';
import About from './pages/About/About.jsx';
import Cart from './pages/Cart/Cart.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePageContent />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/shop//*" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/motherboard/:id" element={<HomePageContent />}></Route>
        <Route path="/videocards/id:" element={<HomePageContent />}></Route>
        <Route path="/processors/id:" element={<HomePageContent />}></Route>
        <Route path="/vinchester-hdd/id:" element={<HomePageContent />}></Route>
        <Route path="/vinchester-ssd/id:" element={<HomePageContent />}></Route>
        <Route path="/cases/id:" element={<HomePageContent />}></Route>
        <Route path="/coolers/id:" element={<HomePageContent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
