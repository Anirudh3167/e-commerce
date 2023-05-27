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
      {(session.status === 'authenticated')?
        <div> Hello, {session.data.user.email}</div> :
        <div> This is the Home Page. &nbsp; &nbsp;Please Sign In </div>  
      }
    </div>
    <Footer />
   </main> 
  )
}

