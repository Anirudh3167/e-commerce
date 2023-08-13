"use client";
import React, { useEffect, useState } from "react";

import styles from "./page.module.css";
import Navbar from "../../../components/Navbar/page";
import Link from 'next/link'
import axios from "axios";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

function Order() {
    // Type casting
    type productType = {
      thumbnail : String,
      productId : String,
      title : String,
      brand : String,
      rating : number,
      qty : number,
      price : number
    }
    type productDataType = {
      id : string,
      title : String,
      description : String,
      price : number,
      discountPercentage : number,
      rating : number,
      stock : number,
      brand : String,
      category : String,
      thumbnail : String,
      images : [String]
  }
    const [productDetails, setProductDetails] = useState<productType[] | null >(null);
    const [displayDetails, setDisplayDetails] = useState<productType[] | null >(null);
    const [searchInput,setSearchInput] = useState('');
    const [totalPrice,setTotalPrice] = useState(0);
    const [totalItems,setTotalItems] = useState(0);

    // Load the data to displayDetails on the value of productDetails change.
    useEffect(() => {setDisplayDetails(productDetails)},[productDetails]);

    const handleSearch = () => {
      if (searchInput !== '') {
        const searchInputLower = searchInput.toLowerCase();
       var displayData : productType[] = [];
       productDetails && productDetails.forEach((product) => {
          const productTitleLower = product.title.toLowerCase();
          if (productTitleLower.indexOf(searchInputLower) !== -1) {
            displayData.push(product);
          }
        })
        setDisplayDetails(displayData)
      } else {
        setDisplayDetails(productDetails);
      }
    }


    // Getting the data.
    useEffect(() => {
      const getData = async () => {
        let limit = 10;
        let price_sum = 0;
        let item_sum = 0;
        const resp = await axios.get("https://dummyjson.com/products");

        const details: productType[] = resp.data.products.slice(0,limit).map((product: productDataType) => ({
          title: product.title,
          thumbnail: product.thumbnail,
          qty: product.stock,
          rating: product.rating,
          price: product.price,
          brand: product.brand,
          productId: product.id,
        }));
        details.forEach((product) => {price_sum += product.price*product.qty; item_sum += product.qty;})
          setProductDetails(details);
          setTotalItems(item_sum);
          setTotalPrice(price_sum);
      }

      getData();
    },[])
  return (
    <div className={styles.mainWrapper}>
      <Navbar />
      <div className={styles.mainContainer}>
        <div className={styles.orderContainer}>
          <h1>Cart</h1>
          <div className={styles.searchContainer}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search your products here"
              onChange={(e) => {setSearchInput(e.target.value)}}
            />
            <div className={styles.searchBtn} onClick={() => {handleSearch()}}>Search</div>
          </div>
          <div className={styles.productContainer}>
          { productDetails ? displayDetails ? displayDetails.map((product, index) => (
            <div key={index} className={styles.productChild}>
              <Link href={`/products/${product.productId}`} className={styles.left}>
                <img src={`${product.thumbnail}`} alt="productImage" />
              </Link>
              <Link href={`/products/${product.productId}`} className={styles.right}>
              <p>Product Name: {product.title}</p>
              <p>Brand: <span>{product.brand}</span></p>
              <p>Rating: {product.rating}/5</p>
              <p>Qty: {product.qty}</p>
              {/* <p>Price: ₹{product.price.toFixed(2)}</p> */}
              <p>Price: ₹{(product.qty * product.price).toFixed(2)}</p>
                {/* {getStatusComponent(order.status)} */}
              </Link>
              <div className={styles.productBottomContainer}>
                <AiOutlineHeart className={styles.addWishlistBtn} />
                {
                  true ? <div className={styles.addedCart}> Added to cart </div> :
                  <AiOutlineShoppingCart className={styles.addWishlistBtn} />
                }
              </div>
            </div>
          )) : "" : "Loading" }
          </div>
        </div>
        <div className={styles.rightCheckoutWrapper}>
          <div className={styles.totalItems}>Total Items : {totalItems} </div>
          <div className={styles.totalPrice}>Total Price : ₹{totalPrice} </div>
          <button className={styles.CheckoutBtn}> Checkout </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
