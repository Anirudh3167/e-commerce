import React from 'react'
import Styles from '@/components/styles/navbar.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Navbar() {
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
              <Link href='/signin' className={Styles.content}>
                <div className={Styles.signupBtn}> Sign Up </div>
              </Link>
            </div>
        </div>
    </main>
  )
}
