import React from 'react'
import { useDispatch } from "react-redux";
import ReusableButton from "./ReusableButton";
import { removeFromCart } from "../redux/actions/cartActions";
import { getImageForItem } from '../utils';

const CartProductDetail = ({ priceMap, cartItems, totalPrice, showProductImage, showPriceLarge }) => {

  const dispatch = useDispatch();
  const products = Object.entries(cartItems);

  return (
    <>
    <div className="cart-product-detail">
            {products.map(([productName, productQuantity]) => {
                return (
                    <div key={productName} className="cart-product-item">
                        {showPriceLarge &&<div className="cart-product-total-large"> {`$${(productQuantity * priceMap[productName]).toFixed(2)}`}</div>}                        <div className="cart-product-detail">
                            <div className="cart-product-name"> {productName}</div>
                                <div className="cart-product-description"> 
                                    <div className="cart-product-quantity">{`${productQuantity}x`}</div>
                                    <div className="cart-product-price">{` @ ${priceMap[productName].toFixed(2)}`}</div>
                                    <div className="cart-product-total"> {`$${(productQuantity * priceMap[productName]).toFixed(2)}`}</div>
                            </div>
                        </div>
                        {showProductImage ?
                        <div className="product-img">
                                <img src={getImageForItem(productName)} alt={ productName} />
                        </div>
                            :
                            <ReusableButton child={<svg aria-label={`Remove ${productName}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="currentColor" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>}  className="remove-product-cart" label={`Remove ${productName}`} onClick={() => dispatch(removeFromCart(productName))} />
                        }
                    </div>
                )

            })}
           <div className="cart-total">
                 <div className="cart-total-label">
                       Order Total
                  </div>
                    <div className="cart-total-value">
                          {`$ ${totalPrice}`}
                   </div>
                </div>
        </div>
    </>
  )
}

export default CartProductDetail