"use client"
import React,{ useEffect, useState } from 'react'

import styles from './page.module.css'
import Navbar from '../../../../components/Navbar/page'
import { useRouter } from 'next/navigation'
import { INSPECT_MAX_BYTES } from 'buffer';
import axios from 'axios'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { TfiFilter } from 'react-icons/tfi'

function page({params} : {params: {query:string}}) {
  // Type casting
  type productDataType = {
    "id" : Number,
    title : String,
    description : String,
    price : Number,
    discountPercentage : Number,
    rating : Number,
    stock : Number,
    brand : String,
    category : String,
    thumbnail : String,
    images : [String]
  }

  const query = decodeURIComponent(params.query);
  const [allProducts,setAllProducts] = useState<productDataType[]>([]);
  const [displayProducts,setDisplayProducts] = useState<productDataType[]>([]);

  // Getting the search Results
  useEffect(()=>{
    const getDetails = async () => {
        const resp = await axios.get(`https://dummyjson.com/products`);
        setAllProducts(resp.data.products);
        setDisplayProducts(resp.data.products.filter((product: productDataType) =>
              product.title.includes(query) || product.brand.includes(query) ||
              product.category.includes(query) || product.description.includes(query)
        ));
    }
    getDetails();
  },[])

  useEffect(() => {
    const filteredProducts = allProducts.filter((product) =>
      product.title.includes(query) ||
      product.brand.includes(query) ||
      product.category.includes(query) ||
      product.description.includes(query)
    );
    setDisplayProducts(filteredProducts);
  }, [query, allProducts]);
  return (
    <div>
        <Navbar params={{search:query}} />
        <div className={styles.mainConatiner}>
          <div className={styles.searchDisplay}>
            <div style={{display:"flex",alignItems:"center",margin:"0 5px",fontSize:"20px"}}>
              Your search:
            </div>
            <div style={{color:"blue"}}>
              {query}
            </div>
          </div>
          <div className={styles.searchFilterOptions}>
              <TfiFilter /> filter
          </div>
          <div className={styles.searchProductsContainer}>
          {displayProducts.map((slide,index) => {
            return(
                <div className={styles.searchProductItemContainer} key={index}>
                      <div className={styles.slideImageContainer}>
                        <img src={`${slide.thumbnail}`} alt="No Image" className={styles.slideImage} />
                      </div>
                      <div className={styles.slideTitle}>{slide.title}</div>
                      <div className={styles.slideSubContainer}>
                          <div className={styles.slidePriceContainer}>
                            <div className={styles.slidePrice}>₹{`${slide.price}`}</div>
                            <div className={styles.slideDiscountPercent}>{`-${slide.discountPercentage}%`}</div>
                          </div>
                          <div className={styles.slideBrand}>{slide.brand}</div>
                      </div>
                      <div className={styles.slideBottomContainer}>
                        <AiOutlineHeart className={styles.addWishlistBtn} />
                        <AiOutlineShoppingCart className={styles.addWishlistBtn} />
                      </div>
                </div>
            )
          })}
          </div>
        </div>
    </div>
  )
}

export default page