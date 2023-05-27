"use client"
// React imports
import React from 'react'

// Next imports
import Head from 'next/head'
import Link from 'next/link'

// Styles imports
import Styles from '@/components/styles/navbar.module.css'

// Next-Auth imports
import { signOut, useSession } from 'next-auth/react'

export default function Navbar() {
  const session = useSession();
  return (
    <main className={Styles.mainWrapper}>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
        <div className={Styles.mainContainer}>
                                                        {/* Logo */}
            <div className={Styles.logoSpace}>
                TrendyHub
            </div>
                                                        {/* Hamburger Menu */}
            <div className={Styles.hamburgerMenu}>
              <div className={`${Styles.hamburgerLine} + ${Styles.before}`}></div>
              <div className={`${Styles.hamburgerLine} + ${Styles.middle}`}></div>
              <div className={`${Styles.hamburgerLine} + ${Styles.after}`}></div>
            </div>
                                                        {/* Search Bar */}
            <div className={Styles.searchContainer}>
              <input type="text"  className={Styles.searchBar} name='searchBar' placeholder='Enter your search' />
              <button className={Styles.searchButton}>Search</button>
            </div>
            <div className={Styles.contentsContainer}>
              <Link href='#' className={Styles.content}>Home</Link>
              <Link href='#' className={Styles.content}>About</Link>
              <Link href='#' className={Styles.content}>Contact</Link>
              {
                (session.status === "authenticated")? 
                <Link href='/profile' className={Styles.content}>Profile</Link> : ""
              }
              { (session.status === "authenticated")?
                <div className={Styles.content} onClick={()=>{signOut()}}>
                  <div className={Styles.signupBtn}> 
                    Sign Out
                  </div>
                </div>
                :
                <Link href='/signin' className={Styles.content}>
                  <div className={Styles.signupBtn}> 
                   Sign Up
                  </div>
                </Link>
              } 
            </div>
        </div>
    </main>
  )
}
