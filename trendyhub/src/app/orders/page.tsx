"use client";
import React, { useState } from "react";

import Image from "next/image";
import styles from "./orders.module.css";
import Navbar from "../../../components/Navbar/page";

const Orders: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating === rating ? null : selectedRating);
  };

  let greetingMessage = "";
  if (rating === null) {
    greetingMessage = "";
  } else if (rating === 1) {
    greetingMessage = "Sorry to hear you didn't like it.";
  } else if (rating === 5) {
    greetingMessage = "Thanks for loving our product!";
  } else {
    greetingMessage = "Thanks for your feedback!";
  }

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
        <div className={styles.ordersChild}>
          <div className={styles.left}>
            <img src="https://th.bing.com/th/id/OIP.wMftsrP6USIHg4aMEpwnPQHaHa?pid=ImgDet&rs=1" alt="productImage" /> 
          </div>
          <div className={styles.right}>
            <h3>Product Name</h3>
            <p>Delivered on June 9</p>
            <div>
              <div className={styles.starRating}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`${styles.star} ${
                      star <= (rating || 0) ? styles.selected : ""
                    }`}
                    onClick={() => handleStarClick(star)}
                  >
                    ★
                  </span>
                ))}
                <p>
                  {rating === null
                    ? "Rate this product now"
                    : `You've rated: ${rating} stars`}
                </p>
                <p>{greetingMessage}</p>
              </div>
            </div>
          </div>
          <div className={styles.eRight}>
            {">"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
