import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import cartLogo from '../../img/main/cart-svgrepo-com.svg';


import CartItemMaker from './CartItemMaker.jsx';

const Cart = ({cartList, changeMyArray, modernize}) => {
  const [items, SetItems] = useState([]);
  const [allCost, setAllCost] = useState(0);
  const [fullCost, setFullCost] = useState(0);
  const [anotherCost, setAnotherCost] = useState(0);
  const [minusCost, setMinusCost] = useState(0);
  const [allItems, setAllItems] = useState(cartList);
  const itemSorted = (item) => {
    const newArray = allItems.filter(subItem => subItem.name !== item);
    setAllItems(newArray);
    modernize(newArray);
  };
  return (
    <div className="cart">
      <div className="container cart-container">
        {
          allItems.map(item => (
            <CartItemMaker name={item.name} key={item.name} deleteButton={itemSorted} cost={item.cost} imgUrl={item.imageUrl}/>
          ))
        }
      </div>
    </div>
  )
};

export default Cart;