"use client";
import React, { useState } from "react";

import styles from "./order.module.css";
import Navbar from "../../../../components/Navbar/page";

function Order({ params }: { params: { orderId: string } }) {
    const [productDetails, setProductDetails] = useState([
        { 
            productName: 'Product A',
            productId: "12345",
            imageURL: "https://th.bing.com/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?pid=ImgDet&rs=1",
            brand: 'Brand X', 
            qty: 2, 
            price: 102
        },
        { 
            productName: 'Product B', 
            productId: "90345",
            imageURL: "https://th.bing.com/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?pid=ImgDet&rs=1",
            brand: 'Brand Y', 
            qty: 3, 
            price: 150 
        },
        { 
            productName: 'Product B', 
            productId: "90345",
            imageURL: "https://th.bing.com/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?pid=ImgDet&rs=1",
            brand: 'Brand Y', 
            qty: 3, 
            price: 150 
        },
        { 
            productName: 'Product B', 
            productId: "90345",
            imageURL: "https://th.bing.com/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?pid=ImgDet&rs=1",
            brand: 'Brand Y', 
            qty: 3, 
            price: 150 
        },
        // Add more products here
      ]);

  return (
    <div className={styles.mainWrapper}>
      <Navbar />
      <div className={styles.orderContainer}>
        <h1>Your Products</h1>
        <h4>OrderID: 12345</h4> {/*render order id here */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search your products here"
          />
          <div className={styles.searchBtn}>Search</div>
        </div>
        <div className={styles.productContainer}>
        {productDetails.map((product, index) => (
            <div key={index} className={styles.productChild}>
            <div className={styles.left}>
              <img src={product.imageURL} alt="productImage" /> 
                <a href="#">View product ↗️</a>
            </div>
            <div className={styles.right}>
            <p>Product Name: {product.productName}</p>
            <p>Brand: <span>{product.brand}</span></p>
            <p>Qty: {product.qty}</p>
            <p>Price: ₹{product.price.toFixed(2)}</p>
            <p>Total Price: ₹{(product.qty * product.price).toFixed(2)}</p>
              {/* {getStatusComponent(order.status)} */}
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
