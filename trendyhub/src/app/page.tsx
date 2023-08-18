'use client'

import React, { useState, useEffect } from 'react';

import styles from './page.module.css'
import Navbar from '../../components/Navbar/page'

import Link from 'next/link';
import axios from 'axios'

import {AiOutlineHeart,AiOutlineShoppingCart} from 'react-icons/ai'
import { useRouter } from 'next/navigation';

export default function Home() {
  // Type casting
  type sliderData = {
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
  // Slider Variables here.
  const [brandAdSlider,setBrandAdSlider] = useState([
    {'message':'Item 1'},{'message':'Item 2'},{'message':'Item 3'},{'message':'Item 4'},
    {'message':'Item 5'},{'message':'Item 6'},{'message':'Item 7'},{'message':'Item 8'},
  ])
  const [brandSliderIndex,setBrandSliderIndex] = useState(0);
  const [sliderOne,setSliderOne] = useState<sliderData[]>([])
  const [sliderOneIndex,setSliderOneIndex] = useState(0);
  const [sliderTwo,setSliderTwo] = useState<sliderData[]>([])
  const [sliderTwoIndex,setSliderTwoIndex] = useState(0);
  const [sliderThree,setSliderThree] = useState<sliderData[]>([])
  const [sliderThreeIndex,setSliderThreeIndex] = useState(0);

  const navigate = useRouter();
  const showProduct = (slide:number,index:number) => {
        navigate.push(`/products/${slide+index}`);
  }


  // Loading API's
  useEffect(() => {
    const getFakeData = async () => {
      const resp = await axios.get('https://dummyjson.com/products');
      console.log(resp.data.products);
      setSliderOne(resp.data.products.slice(0,10));
      setSliderTwo(resp.data.products.slice(11,20));
      setSliderThree(resp.data.products.slice(21,30));
    } 

    getFakeData();
  },[])

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setBrandSliderIndex((brandSliderIndex + 1)%brandAdSlider.length);
    }, 3000); // Timeout function in (milli seconds).
    return () => clearInterval(sliderInterval);
  }, [brandSliderIndex]);


  return (
    <div className={styles.mainWrapper}>
      <Navbar />
      <div className={styles.mainContainer}>
                                                                {/* Brand Ads Slider */}
        <div className={styles.brandAdSliderWrapper}>
          <div className={styles.brandAdSlider} 
            style={{transform: `translateX(-${brandSliderIndex * 100}%)`}}>
              {sliderOne.map((slide,index) => {
                return (
                  <div className={styles.brandSlide} key={index}>
                    <img src={`${slide.thumbnail}`} alt="No Image here" width="100%" height="100%" />
                  </div>
                )
              })}
          </div>
          <div className={styles.brandSlideInformer}>  {/*Dots at slider bottom*/}
              {sliderOne.map((slide,index) => {
                return (
                  <div className={styles.brandSlideInformerItem} key={index}
                  onClick={() => {setBrandSliderIndex(index)}}
                  style={index === brandSliderIndex ? {backgroundColor:"rgba(20,20,20,0.8)"} : {backgroundColor:"rgb(130,130,130"}}>

                  </div>
                )
              })}
          </div>
        </div>
                                                                {/* Slider 1 --> Electronics */}
        <div className={styles.sliderWrapper}>        
          <div className={styles.sliderHeading}> Electronics </div>
          <div className={styles.sliderContainer}>
            {sliderOne.map((slide,index) => {
              return (
                <div className={styles.sliderItem} key={index} 
                  style={{"transform":`translateX(-${210*sliderOneIndex}px`}}
                  onClick={() => {showProduct(1,index);}}>
                    <div className={styles.slideContainer}>
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
                </div>
              )
            })}
          </div>
            <div className={styles.sliderBtns}>
              <div className={styles.slidePrevBtn} 
                style={sliderOneIndex === 0 ? {display:"none"} : {display:"flex"}} 
                onClick={() => {setSliderOneIndex(sliderOneIndex - 1);}}> 
                  {`<`} 
              </div>
              <div className={styles.slideNextBtn} 
                style={sliderOneIndex === sliderOne.length - 2 ? {display:"none"} : {display:"flex"}} 
                onClick={() => {setSliderOneIndex(sliderOneIndex + 1)}}> 
                  {`>`}
              </div>
            </div>
        </div>
                                                                {/* Slider 2 --> Skin Care */}
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderHeading}> Skin Care </div>
          <div className={styles.sliderContainer}>
            {sliderTwo.map((slide,index) => {
              return (
                <div className={styles.sliderItem} key={index} 
                  style={{"transform":`translateX(-${210*sliderTwoIndex}px`}}
                  onClick={() => {showProduct(12,index);}}>
                    <div className={styles.slideContainer}>
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
                </div>
              )
            })}
          </div>
            <div className={styles.sliderBtns}>
              <div className={styles.slidePrevBtn} 
                style={sliderTwoIndex === 0 ? {display:"none"} : {display:"flex"}} 
                onClick={() => {setSliderTwoIndex(sliderTwoIndex - 1);}}> 
                  {`<`}
              </div>
              <div className={styles.slideNextBtn} 
                style={sliderTwoIndex === sliderTwo.length - 2 ? {display:"none"} : {display:"flex"}} 
                onClick={() => {setSliderTwoIndex(sliderTwoIndex + 1)}}> 
                  {`>`}
              </div>
            </div>
        </div>
                                                                {/* Slider 3 --> Fancy Store */}
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderHeading}> Fancy Store </div>
          <div className={styles.sliderContainer}>
            {sliderThree.map((slide,index) => {
              return (
                <div className={styles.sliderItem} key={index} 
                  style={{"transform":`translateX(-${210*sliderThreeIndex}px`}}
                  onClick={() => {showProduct(22,index);}}>
                    <div className={styles.slideContainer}>
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
                </div>
              )
            })}
          </div>
            <div className={styles.sliderBtns}>
              <div className={styles.slidePrevBtn} 
                style={sliderThreeIndex === 0 ? {display:"none"} : {display:"flex"}} 
                onClick={() => {setSliderThreeIndex(sliderThreeIndex - 1);}}> 
                  {`<`}
              </div>
              <div className={styles.slideNextBtn} 
                style={sliderThreeIndex === sliderThree.length - 2 ? {display:"none"} : {display:"flex"}} 
                onClick={() => {setSliderThreeIndex(sliderThreeIndex + 1)}}> 
                  {`>`}
              </div>
            </div>
        </div>

                                                                        {/* Categories */}
        <div className={styles.categoriesTable}>
          <div className={styles.categoriesTableHead}> Categories </div>
          <Link href="#" className={styles.categoriesItem}> Mobiles </Link>
          <Link href="#" className={styles.categoriesItem}> Watches </Link>
          <Link href="#" className={styles.categoriesItem}> Electronics </Link>
          <Link href="#" className={styles.categoriesItem}> For men </Link>
          <Link href="#" className={styles.categoriesItem}> For women </Link>
          <Link href="#" className={styles.categoriesItem}> For Kids </Link>
          <Link href="#" className={styles.categoriesItem}> Furniture </Link>
          <Link href="#" className={styles.categoriesItem}> Kitchen ware </Link>
        </div>
      </div>
    </div>
  )
}
