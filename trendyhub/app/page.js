'use client'

// Component Imports
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

// Styles imports
import Styles from './page.module.css'

// Next-Auth import
import { useSession } from 'next-auth/react'

export default function Home() {
  const session = useSession();
  return (
   <main className={Styles.mainWrapper}>
    <Navbar />
    <div className={Styles.mainContainer}>
      This is the Home Page.
    </div>
    <Footer />
   </main> 
  )
}
