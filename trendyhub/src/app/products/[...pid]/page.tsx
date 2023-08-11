"use client"
import React, { useState,useEffect } from 'react'
import Navbar from '../../../../components/Navbar/page'
import axios from 'axios'

import styles from './page.module.css'

function page({ params }: { params: { pid: string } }) {
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
  const [productDetails,setProductDetails] = useState<productDataType | null>(null);
  const getProduct = async () => {
    try {

        const res = await axios.get(`https://dummyjson.com/products/${params.pid}`)
        console.log(res.data);
        setProductDetails(res.data);
    } catch(err) {
        console.log(err);
    }
  }
  useEffect(()=>{
    getProduct();
  },[])

  const [imageIndex,setImageIndex] = useState(0);
  const changeImage = (index:number) => {
      setImageIndex(index);
  }
  return (
    <div>
        <Navbar />
        {
        productDetails ? 
          <div className={styles.mainContainer}>
              <div className={styles.submainContainer}>
                  {
                  productDetails ? 
                    <div className={styles.imagesContainer}>
                      {productDetails.images.map((image,index) => {
                        return(
                          <div className={styles.imageContainer} key={index}
                          style={{transform:`translateX(-${100*imageIndex}%`}}>
                            <img src={`${image}`} alt="No display" className={styles.imageBox} />
                          </div>
                        )
                      })}
                      <div className={styles.slideBtnsWrapper}>
                        <div className={styles.slideBtnsContainer}>
                          {productDetails.images.map((image,index) => {
                            return(
                              <div className={styles.slideBtns} key={index}
                              style={imageIndex === index ? {backgroundColor:"black"}:{}}
                              onClick={() => {changeImage(index);}}></div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  : <div className={styles.imageContainer}> Loading... </div>
                  }
                  <div className={styles.aboutProduct}>
                    <div className={styles.productPartition}>
                      <div className={styles.productTitle}>{productDetails.title}</div>
                      <div className={styles.productBrand}>{productDetails.brand}</div>
                    </div>
                    <div className={styles.productDesc}>{productDetails.description}</div>
                    <div className={styles.productRating}>Rating : {`${productDetails.rating}`}</div>
                    <div className={styles.productPriceContainer}>
                      <div className={styles.productPrice}>₹{`${productDetails.price}`}</div>
                      <div className={styles.productDiscount}>-{`${productDetails.discountPercentage}%`} discount</div>
                    </div>
                    <div className={styles.productStock}> In stock: {`${productDetails.stock}`}</div>
                    <div className={styles.buyNowBtn}> Buy Now </div>
                    <div className={styles.addCartBtn}> Add to Cart </div>
                  </div>
              </div>
          </div> 
        : "Loading"
        }
    </div>
  )
}

export default page