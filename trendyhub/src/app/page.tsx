'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '../../components/Navbar/page'
import Link from 'next/link';


export default function Home() {
  // Slider Variables here.
  const [brandAdSlider,setBrandAdSlider] = useState([
    {'message':'Item 1'},{'message':'Item 2'},{'message':'Item 3'},{'message':'Item 4'},
    {'message':'Item 5'},{'message':'Item 6'},{'message':'Item 7'},{'message':'Item 8'},
  ])
  const [brandSliderIndex,setBrandSliderIndex] = useState(0);
  const [sliderOne,setSliderOne] = useState([
    {'message':'Item 1'},{'message':'Item 2'},{'message':'Item 3'},{'message':'Item 4'},
    {'message':'Item 5'},{'message':'Item 6'},{'message':'Item 7'},{'message':'Item 8'},
  ])
  const [sliderOneIndex,setSliderOneIndex] = useState(0);
  const [sliderTwo,setSliderTwo] = useState([
    {'message':'Item 1'},{'message':'Item 2'},{'message':'Item 3'},{'message':'Item 4'},
    {'message':'Item 5'},{'message':'Item 6'},{'message':'Item 7'},{'message':'Item 8'},
  ])
  const [sliderTwoIndex,setSliderTwoIndex] = useState(0);
  const [sliderThree,setSliderThree] = useState([
    {'message':'Item 1'},{'message':'Item 2'},{'message':'Item 3'},{'message':'Item 4'},
    {'message':'Item 5'},{'message':'Item 6'},{'message':'Item 7'},{'message':'Item 8'},
  ])
  const [sliderThreeIndex,setSliderThreeIndex] = useState(0);

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
              {brandAdSlider.map((slide,index) => {
                return (
                  <div className={styles.brandSlide} key={index}>{slide.message}</div>
                )
              })}
          </div>
          <div className={styles.brandSlideInformer}>  {/*Dots at slider bottom*/}
              {brandAdSlider.map((slide,index) => {
                return (
                  <div className={styles.brandSlideInformerItem} key={index}
                  onClick={() => {setBrandSliderIndex(index)}}
                  style={index === brandSliderIndex ? {backgroundColor:"rgba(20,20,20,0.8)"} : {backgroundColor:"rgb(130,130,130"}}>

                  </div>
                )
              })}
          </div>
        </div>
                                                                {/* Slider 1 --> Latest */}
        <div className={styles.sliderWrapper}>        
          <div className={styles.sliderHeading}> Latest </div>
          <div className={styles.sliderContainer}>
            {sliderOne.map((slide,index) => {
              return (
                <div className={styles.sliderItem} key={index} 
                  style={{"transform":`translateX(-${160*sliderOneIndex}px`}}>
                    {slide.message}
                </div>
              )
            })}
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
        </div>
                                                                {/* Slider 2 --> Trending */}
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderHeading}> Trending </div>
          <div className={styles.sliderContainer}>
            {sliderTwo.map((slide,index) => {
              return (
                <div className={styles.sliderItem} key={index} 
                  style={{"transform":`translateX(-${160*sliderTwoIndex}px`}}>
                    {slide.message}
                </div>
              )
            })}
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
        </div>
                                                                {/* Slider 3 --> Electronics */}
        <div className={styles.sliderWrapper}>
          <div className={styles.sliderHeading}> Electronics </div>
          <div className={styles.sliderContainer}>
            {sliderThree.map((slide,index) => {
              return (
                <div className={styles.sliderItem} key={index} 
                  style={{"transform":`translateX(-${160*sliderThreeIndex}px`}}>
                    {slide.message}
                </div>
              )
            })}
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
