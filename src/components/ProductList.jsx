import React from 'react'
import { data } from '../constants'
import Product from './Product'

const ProductList = () => {
  return (
    <>
    <ul className="products-container">
        {
            data?.map((product) => (
                <li className="product" key={product.name} >
                    {/* Product Item*/}
                    <Product
                      image={product.image}
                      name={product.name}
                      category={product.category}
                      price={product.price} />
                </li>
            ))
        }
    </ul>
    </>
  )
}

export default ProductList