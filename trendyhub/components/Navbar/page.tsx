"use client"
import React, { ChangeEvent, useState } from 'react'
import Link from 'next/link';

import styles from './page.module.css'

function Navbar() {
  // Variables
  const [activeHamubrger,seActiveHamburger] = useState(false);
  const [searchBarInput,setSearchBarInput] = useState("");
  const [login,setLogin] = useState(false);

  // Functions
  const searchBarAction = (event: ChangeEvent<HTMLInputElement>) => {
  setSearchBarInput(event.target.value);
};
  return (
    <div className={styles.mainWrapper}>
       <div className={styles.mainContainer}>
          {/* Hamburger Menu */}
          <div className={`${styles.hamburgerMenu} ${activeHamubrger ? styles.activeHamburger : ""}`}  onClick={() => {seActiveHamburger(!activeHamubrger)}}>
            <div className={`${styles.hamburgerLine} ${styles.hamburgerTop}`}></div>
            <div className={`${styles.hamburgerLine} ${styles.hamburgerMiddle}`}></div>
            <div className={`${styles.hamburgerLine} ${styles.hamburgerBottom}`}></div>
          </div>

          {/* Logo */}
          <div className={styles.logoSpace}> TrendyHub </div>

          
          {/* searchBar */}
          <input placeholder='Search here' value={searchBarInput} onInput={(e: ChangeEvent<HTMLInputElement>) => {searchBarAction(e)}} className={styles.searchBarBox} />

          {/* Links */}
          <div className={styles.linksHolder}>
            <div className={styles.linkContainer}>
              <Link href="#" className={styles.navLink}> Home </Link>
            </div>
            <div className={styles.linkContainer}>
              <Link href="#" className={styles.navLink}> About </Link>
            </div>
            <div className={styles.linkContainer}>
              <div className={styles.navLink}> Deals </div>
              <div className={styles.subLinksHolder}>
                <div className={styles.subLinkContainer}>
                  <Link href="#" className={styles.navLink}> Product 1 </Link>
                </div>
                <div className={styles.subLinkContainer}>
                  <Link href="#" className={styles.navLink}> product 2 </Link>
                </div>
                <div className={styles.subLinkContainer}>
                  <Link href="#" className={styles.navLink}> product 3 </Link>
                </div>
              </div>
            </div>
            <div className={styles.linkContainer}>
              <div className={`${styles.navLink} ${login ? "" : styles.loginBtn}`}  onClick={() => {login ? "" : setLogin(!login)}}> {login ? "Profile" : "Login / Signup"} </div>
              {login ?
              <div className={styles.subLinksHolder}>
                <div className={styles.subLinkContainer}>
                  <Link href="#" className={styles.navLink}> Orders </Link>
                </div>
                <div className={styles.subLinkContainer}>
                  <Link href="#" className={styles.navLink}> Wishlist </Link>
                </div>
                <div className={styles.subLinkContainer}>
                  <Link href="#" className={styles.navLink}> Settings </Link>
                </div>
                <div className={styles.subLinkContainer} onClick={() => {setLogin(!login)}}>
                  <div className={`${styles.navLink} ${styles.logoutBtn}`}> logout </div>
                </div>
              </div> : ""}
            </div>
          </div>
       </div>
    </div>
  )
}

export default Navbar