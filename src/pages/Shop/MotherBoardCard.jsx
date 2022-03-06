import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const MotherBoardCard = ({ imageUrl, imageName, itemPath }) => {
  return (
    <Link to={`${itemPath}`} className="motherboard-item" onClick={() => {
      console.log('item clicked');
    }}>
      <img src={imageUrl} alt="" className="motherboard-item-src" />
      <p className="motherboard-item-name">{imageName}</p>
    </Link>
  )
};

export default MotherBoardCard;