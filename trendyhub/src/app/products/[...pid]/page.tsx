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
  return (
    <div>
        <Navbar />
        {
            productDetails ? 
            <div className={styles.mainContainer}> Title : {productDetails.title}</div> : "Loading"
        }
    </div>
  )
}

export default page