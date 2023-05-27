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
  console.log(data);
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
          <div className={Styles.productImage}> An Image </div>
          <div className={Styles.productName}> {data['name']} </div>
          <div className={Styles.productPrice}> ${data['price']} </div>
          <div className={Styles.productButtons}>
            <div className={Styles.btn}> 🛒 </div>
            <div className={Styles.btn}> 💖 </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
