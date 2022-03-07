import React, {useState} from 'react';

const CartItemMaker = ({ name, cost, imgUrl, deleteButton }) => {
  const [costOfItem ,setCostOfItem] = useState(cost);
  const costPlus = () => {
    setCostOfItem(Number(costOfItem) + Number(cost));
  }
  const costMinus = () => {
    if(costOfItem !== 0) {
      setCostOfItem(Number(costOfItem) - Number(cost))
    } 
  };
  return (
    <div className="cart-item-wrapper">
      <img src={imgUrl} alt={name} className="cart-item-src" />  
      <p className="cart-item-title">{name}</p>
      <div className="cost-wrapper">
        <p className="cart-item-cost">{costOfItem}</p>
        <div className="cost-buttons">
          <button className="cost-plus" onClick={costPlus}>+</button>
          <button className="cost-minus" onClick={costMinus}>-</button>
        </div>  
      </div>
        <button className="delete-btn" onClick={() => {
          deleteButton(name);
        }}>Delete</button>
    </div>
  )
};

export default CartItemMaker;