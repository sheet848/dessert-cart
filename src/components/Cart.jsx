import React from 'react'
import ReusableButton from './ReusableButton';
import CartProductDetail from './CartProductDetail';
import { useDispatch, useSelector } from 'react-redux';
import { data } from '../constants';
import { showModal } from "../redux/actions/modalActions";

const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const priceMap = data.reduce((acc, item) => {
    acc[item.name] = item.price;
    return acc;
  }, {});

  const totalQuantity = Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);

  const totalPrice = Object.entries(cartItems).reduce((total, [itemName, quantity]) => {
    const itemPrice = priceMap[itemName] || 0;
    return total + (itemPrice * quantity);
  }, 0).toFixed(2);

  const handleModalView = (priceMap, cartItems, totalPrice) => {
    dispatch(showModal({priceMap, cartItems, totalPrice}))
  }

  return (
    <>
    <div className="cart-main-conatiner">
      <div className="cart-header">
        <p>Your Cart ({totalQuantity})</p>
      </div>
      { totalQuantity > 0 ?
      <>
          <div className="cart body">
        <CartProductDetail priceMap={priceMap} cartItems={cartItems} totalPrice={totalPrice} />
      </div>
      <div className="delivery-slogan">
      <img src='./src/assets/icon-carbon-neutral.svg' role='img' aria-label='icon-carbon-meutral-icon' />
      <p className="delivery-description">
      This is a <span>carbon-neutral</span> delivery
      </p>  
      </div>
      <div className="cart-footer">
        <ReusableButton label="Confirm Order" className="confirm-order-button" onClick={()=>handleModalView(priceMap, cartItems, totalPrice)} />
      </div>
      </> :
        <div className="empty-cart">
        <img src='./src/assets/illustration-empty-cart.svg' role='img' aria-label='illustration-empty-cart' />
        <p className="empty-cart-msg">Your added items would appear here</p>
    </div>
      }
      
    </div>
    </>
  )
}

export default Cart