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

  const getStatusComponent = (status:string) => {
    switch (status) {
      case 'Ordered':
        // return 'orange';
        return(
          <p style={{display:"flex",flexDirection:"row",alignItems:"center"}}>Status: <span className={styles.statusClass} style={{ color:"rgb(230,130,0)", backgroundColor:"rgba(170,110,0,0.2)" }}>{status}</span></p>
        )
      case 'Delivered':
        // return 'green';
        return(
          <p style={{display:"flex",flexDirection:"row",alignItems:"center"}}>Status: <span className={styles.statusClass} style={{ color:"rgb(0,230,0)", backgroundColor:"rgba(0,130,0,0.2)" }}>{status}</span></p>
        )
      case 'Failed':
        // return 'red';
        return(
          <p style={{display:"flex",flexDirection:"row",alignItems:"center"}}>Status: <span className={styles.statusClass} style={{ color:"rgb(230,0,0)", backgroundColor:"rgba(130,0,0,0.2)" }}>{status}</span></p>
        )
      case 'Returned':
        // return 'blue';
        return(
          <p style={{display:"flex",flexDirection:"row",alignItems:"center"}}>Status: <span className={styles.statusClass} style={{ color:"rgb(0,0,230)", backgroundColor:"rgba(0,0,130,0.2)" }}>{status}</span></p>
        )
      default:
        // return 'black';
        return(
          <p style={{display:"flex",flexDirection:"row",alignItems:"center"}}>Status: <span className={styles.statusClass} style={{ color:"black", backgroundColor:"white" }}>{status}</span></p>
        )
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
          <div className={styles.searchBtn}>Search</div>
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
              {getStatusComponent(order.status)}
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