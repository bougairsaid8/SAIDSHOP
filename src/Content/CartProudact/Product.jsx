import React from 'react'
import './Product.css'

function Cart({image, name, price}) {
  return (
  <div className="product-card">
    <div className="product-image">
        <img src={image} alt={name} />
        <div className="cart-actions">
            <button className="add-to-cart">
                <i className="fa-solid fa-plus"></i> 
                <span >ADD TO CART</span>   
            </button>
            <button className="add-to-wishlist">
                <i className="fa-regular fa-heart"></i>
            </button>
            <button className="add-to-quick-view">
                <i className="fa-regular fa-eye"></i>
            </button>
        </div>
    </div>

    

    <div className="product-details"> 
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
    </div>
</div>
  )
}

export default Cart