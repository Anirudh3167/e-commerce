"use client"

// Component Imports
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { useEffect, useState } from 'react'
import Link from 'next/link'

// Styles imports
import Styles from './page.module.css'

// Next-Auth import
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const session = useSession();
  const [records, setRecords] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("http://localhost:3000/api/product");
      let data = await response.json();
      let records = data['records'];
      setRecords(records);
    };

    fetchData();
  }, []);  

  const showPage = (id) => {
    // router.push('/products/'+id);
  }

  return (
    <main className={Styles.mainWrapper}>
      <Navbar />
      <div className={Styles.mainContainer}>
        {/* {(session.status === 'authenticated') ?
          <div> Hello, {session.data.user.email}</div> :
          <div> This is the Home Page. &nbsp; &nbsp;Please Sign In </div>  
        } */}
        {records.map((product) => (
          <div className={Styles.productCard} key={product.id}>
            <Link href={`/products/${product.id}`}>
            <img src="https://img.freepik.com/free-psd/product-display-3d-podium-background_47987-11310.jpg?w=740&t=st=1685000605~exp=1685001205~hmac=6d697197fe9dfc5be9090aa9091d5ae0e4f0f925975677de4d1b02bf47988686" className={Styles.productImage} alt="Product"></img>
            <h3 className={Styles.productName}>{product.name}</h3>
            <h4 className={Styles.productPrice}>${product.price}</h4>
            </Link>
            <div className={Styles.productButtons}>
              <div className={Styles.cartBtn} data-tooltip="Add to cart">🛒</div>
              <div className={Styles.wishlistBtn} data-tooltip="Add to Wishlist">💖</div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </main> 
  )
}
