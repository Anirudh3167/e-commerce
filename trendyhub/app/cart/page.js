'use client';

import React, { useState } from 'react';
import styles from './cart.module.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..', price: 99, quantity: 1 },
    { id: 2, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..', price: 299, quantity: 1 },
    { id: 3, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..', price: 99, quantity: 1 },
  ]);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getRemainingAmountForFreeDelivery = () => {
    if (calculateSubtotal() > 499) {
      return 0;
    } else {
      return 499 - calculateSubtotal();
    }
  };

  const handleIncreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity < 5 ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.reduce((updatedItems, item) => {
        if (item.id === itemId) {
          if (item.quantity === 1) {
            return updatedItems;
          }
          return [...updatedItems, { ...item, quantity: item.quantity - 1 }];
        }
        return [...updatedItems, item];
      }, [])
    );
  };

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartItems}>
        <h1 className={styles.cart_heading}>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p className={styles.empty_message}>Your cart is empty.</p>
        ) : (
          <>
          <ul className={styles.cart_items_list}>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className={styles.line}></div>
                <div className={styles.cart_item_container}>
                  <div className={styles.itemDetails}>
                    <img className={styles.product_image} src="https://img.freepik.com/free-psd/product-display-3d-podium-background_47987-11310.jpg?w=740&t=st=1685000605~exp=1685001205~hmac=6d697197fe9dfc5be9090aa9091d5ae0e4f0f925975677de4d1b02bf47988686" alt={item.name} />
                    <div className={styles.itemQuantity}>
                      <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                    </div>
                  </div>
                  <div className={styles.product_desc}>
                    <h3 className={styles.product_heading}>{item.name}</h3>
                    <p >Rs.{item.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
        )}
      </div>
      <div className={styles.right_partition}>
        <div className={styles.subtotal}>
          {calculateSubtotal() > 499 ? (
          <p className={styles.featuredText}>🎉 Hurray your order is eligible for ✅Free Delivery!</p>
          ) : (
          <p>🛍️ Add ₹{getRemainingAmountForFreeDelivery()}.00 more items for Free Delivery</p>
          )}
          <h3>Subtotal:</h3>
          <span>₹{calculateSubtotal()}.00</span>
          <div className={styles.checkout_button}>Checkout</div>
        </div>
        <div className={styles.recommended_products}>
            <h5>Recommended products goes here..</h5>
        </div>
      </div>
    </div>
  )
};

export default Cart;