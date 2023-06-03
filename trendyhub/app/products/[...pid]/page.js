"use client"

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Styles from './page.module.css'

const ProductPage = ({ product }) => {
  const image0 = 'https://img.freepik.com/free-psd/product-display-3d-podium-background_47987-11310.jpg?w=740&t=st=1685000605~exp=1685001205~hmac=6d697197fe9dfc5be9090aa9091d5ae0e4f0f925975677de4d1b02bf47988686';

  const [mainImage, setMainImage] = useState(image0);
  const [isImageClicked, setIsImageClicked] = useState(false);
  const imageRef = useRef(null);

  const handleClickImage = (image) => {
    setMainImage(image);
  };

  const handleMainClickImage = (e) => {
    if (imageRef.current && imageRef.current.contains(e.target)) {
      setIsImageClicked(!isImageClicked);
    } else {
      setIsImageClicked(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (imageRef.current && !imageRef.current.contains(e.target)) {
        setIsImageClicked(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const image1 = 'https://img.freepik.com/free-psd/wood-podium-stage-display-mockup-product-presentation-decorated-with-tropical-palm-leaves_103373-1885.jpg?w=740&t=st=1685805086~exp=1685805686~hmac=37159716eb989aecb461836761ac72106ed736cc722e7d827f15771d562e60a0';
  const image2 = 'https://img.freepik.com/free-vector/pomegranate-juice-ad_23-2148040883.jpg?w=740&t=st=1685805635~exp=1685806235~hmac=809f80bf42c16737c301b9887c6298648ec12098b3079ecd2d859e3e873acf6a';
  const image3 = 'https://img.freepik.com/free-vector/sport-drink-advertisement-with-realistic-design_23-2147925116.jpg?w=740&t=st=1685805654~exp=1685806254~hmac=86ed809ae2013cfeeecd985410284a300ca75635d2b546a065b855266fca4bb3';

  // const id = params['pid'];
  // let response = await fetch("http://localhost:3000/api/product?" + new URLSearchParams({pid:id}),{
  //   method:"GET"
  // })
  // let data = await response.json();
  // console.log(data);

// export default async function Page({ params }) {
//   const id = params['pid'];
//   let response = await fetch("http://localhost:3000/api/product?" + new URLSearchParams({pid:id}),{
//     method:"GET"
//   })
//   let data = await response.json();
  return (
    <div className={Styles.mainWrapper}>
      <Navbar />

      {/* Content here */}
      <div className={Styles.productContainer}>
        <div className={Styles.otherImages}>
          <img src={image0} alt="image" onClick={() => handleClickImage(image0)}></img>
          <img src={image1} alt="image1" onClick={() => handleClickImage(image1)}></img>
          <img src={image2} alt="image2" onClick={() => handleClickImage(image2)}></img>
          <img src={image3} alt="image3" onClick={() => handleClickImage(image3)}></img>
        </div>

        <div className={`${Styles.productImage} ${isImageClicked ? Styles.productImageClicked : ''}`} ref={imageRef}>
          <img src={mainImage} alt="image" layout="responsive" onClick={handleMainClickImage} />
          {isImageClicked && (
            <div className={Styles.heartIcon}>
              <input type="checkbox" id="heartToggel" className={Styles.heartCheck}></input>
              <label htmlFor="heartToggel" className={Styles.heart}></label>
            </div>
          )}
        </div>

        <div className={Styles.productDetails}>
          <h2 className={Styles.productName}>Product name</h2>
          <p className={Styles.productPrice}>Rs. 123</p>
          <p className={Styles.productDescription}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
            Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur
          </p>
          <button className={Styles.addToCartButton}>Add to Cart</button>
        </div>
      </div>
      {isImageClicked && <div className={Styles.blurBackground} onClick={handleMainClickImage} />}

      <Footer />
    </div>
  )
}

export default ProductPage;

{/* Product Id : {data['id']} <br />
        Product Name: {data['name']} <br />
        Desc: {data['desc']} <br />
        Stock: {data['stock']} <br />
        Price: {data['price']} <br /> */}
