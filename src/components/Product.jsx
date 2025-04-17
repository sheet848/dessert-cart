import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Counter from './Counter';
import ReusableButton from './ReusableButton';
import { incrementItem } from '../redux/actions/cartActions'

const Product = ({ image, name, category, price }) => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddingProductToCart = () => {
    dispatch(incrementItem(name))
  }

  const uniqueId = `clip-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <>
    <div className={cartItems[name] ? "product-head active" : "product-head"}>
      <picture>
        <source media="(min-width: 1024px)" srcSet={image.desktop} />
        <source media="(min-width: 768px)" srcSet={image.tablet} />
        <source media="(min-width: 375px)" srcSet={image.mobile} />
        <img src={image.thumbnail} alt={name} className="product-image" />
      </picture>
      {
        cartItems[name] ?
          <Counter productName={name} /> : 
          <ReusableButton
            label="Add to Cart"
            onClick={handleAddingProductToCart}
            className="add-to-cart-button"
            child={<svg aria-label="add-to-cart-icon" xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" ><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id={uniqueId}><path fill="currentColor" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>}
            />
      }
    </div>
    <div className="product-body">
      <span className="product-category">{category}</span>
      <span className="product-name">{name}</span>
      <span className="product-price">{`$ ${price}`}</span>
    </div>
    </>
  )
}

export default Product