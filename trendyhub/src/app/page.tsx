'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '../../components/Navbar/page'


export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % BIG_CHILD_COUNT);
    }, 3000); // Change the value here to control the duration for each slide (in milliseconds).

    return () => clearInterval(sliderInterval);
  }, [currentIndex]);

  const BIG_CHILD_COUNT = 5; // Update this count according to the number of bigChild elements.


  return (
    <div className={styles.mainWrapper}>
      <Navbar />
      <div className={styles.mainContainer}>
        Sliders will be here for categories :- <br />
        1. Big Slider for Brand Ads <br />
        <div className={styles.infiniteSlider}>
        <div
          className={styles.bigSliderWrapper}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 2s ease-out',
          }}
        >
          {Array.from({ length: BIG_CHILD_COUNT }, (_, index) => (
            <div key={index} className={styles.bigChild}>
              {index + 1}
            </div>
          ))}
        </div>
      </div>
        2. Slider for Latest <br />
        3. Slider for Trending <br />
        4. Slider for Electronics <br />
      </div>
    </div>
  )
}
