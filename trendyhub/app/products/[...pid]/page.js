import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import Styles from './page.module.css'

export default async function Page({ params }) {
  const id = params['pid'];
  let response = await fetch("http://localhost:3000/api/product?" + new URLSearchParams({pid:id}),{
    method:"GET"
  })
  let data = await response.json();
  return (
    <div className={Styles.mainWrapper}>
      <Navbar />

      {/* Content here */}
      <div className={Styles.mainContainer}>
        {/* Product Id : {data['id']} <br />
        Product Name: {data['name']} <br />
        Desc: {data['desc']} <br />
        Stock: {data['stock']} <br />
        Price: {data['price']} <br /> */}
        <div className={Styles.productCard}>
          <img src="https://img.freepik.com/free-psd/product-display-3d-podium-background_47987-11310.jpg?w=740&t=st=1685000605~exp=1685001205~hmac=6d697197fe9dfc5be9090aa9091d5ae0e4f0f925975677de4d1b02bf47988686" className={Styles.productImage}></img>
          <h3 className={Styles.productName}> {data['name']} </h3>
          <h4 className={Styles.productPrice}> ${data['price']} </h4>
          <div className={Styles.productButtons}>
            <div className={Styles.cartBtn} data-tooltip="Add to cart"> 🛒 </div>
            <div className={Styles.wishlistBtn} data-tooltip="Add to Wishlist"> 💖 </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
