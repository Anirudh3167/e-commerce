"use client";
import React, { useState } from "react";

import Image from "next/image";
import styles from "./orders.module.css";
import Navbar from "../../../components/Navbar/page";

function Orders() {
  const [orderDetails, setOrderDetails] = useState([
    {
      orderId: '12345',
      imageURL: "https://th.bing.com/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?pid=ImgDet&rs=1",
      date: '2023-08-11',
      status: 'Failed',
      price: 100.0,
    },
    {
      orderId: '67890',
      imageURL: "https://th.bing.com/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?pid=ImgDet&rs=1",
      date: '2023-08-12',
      status: 'Ordered',
      price: 200.0,
    },
    {
      orderId: '56790',
      imageURL: "https://th.bing.com/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?pid=ImgDet&rs=1",
      date: '2019-03-12',
      status: 'Delivered',
      price: 350.3,
    },
    {
      orderId: '56790',
      imageURL: "https://th.bing.com/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?pid=ImgDet&rs=1",
      date: '2019-03-12',
      status: 'Returned',
      price: 350.3,
    },
    // Add more dummy orders as needed
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ordered':
        return 'orange';
      case 'Delivered':
        return 'green';
      case 'Failed':
        return 'red';
      case 'Returned':
        return 'blue';
      default:
        return 'black';
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <Navbar />
      <div className={styles.ordersContainer}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search your orders here"
          />
          <a>🔍 Search</a>
        </div>

        {orderDetails.map((order, index) => (
          <a key={index}  href="#" className={styles.ordersChild}>
            <div className={styles.left}>
              <img src={order.imageURL} alt="productImage" /> 
            </div>
            <div className={styles.right}>
              <p>Order ID: {order.orderId}</p>
              <p>Ordered on: {order.date}</p>
              <p>Price: ₹{order.price.toFixed(2)}</p>
              <p>Status: <span style={{ color: getStatusColor(order.status) }}>{order.status}</span></p>
            </div>
            <div className={styles.eRight}>
              {">"}
            </div>
          </a>
        ))}

      </div>
    </div>
  )
}

export default Orders;