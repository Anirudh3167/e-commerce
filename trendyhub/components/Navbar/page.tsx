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
    // To show the relevant searches
  setSearchBarInput(event.target.value);
};
  const searchAction = () => {
    if (searchBarInput !== "") {

      console.log(searchBarInput);
      setSearchBarInput("");
    }
  }
  return (
    <div className={styles.mainWrapper}>
       <div className={styles.mainContainer}>
          {/* Logo */}
          <div className={styles.logoSpace}> TrendyHub </div>
          
          
            {/* Hamburger Menu */}
            <div className={`${styles.hamburgerMenu} ${activeHamubrger ? styles.activeHamburger : ""}`}  onClick={() => {seActiveHamburger(!activeHamubrger)}}>
              <div className={`${styles.hamburgerLine} ${styles.hamburgerTop}`}></div>
              <div className={`${styles.hamburgerLine} ${styles.hamburgerMiddle}`}></div>
              <div className={`${styles.hamburgerLine} ${styles.hamburgerBottom}`}></div>
            </div>  

          <div className={styles.hamburgerWrapper}>
            {/* searchBar */}
            <div className={styles.searchBarContainer}>
              <input placeholder='Search here' value={searchBarInput} onInput={(e: ChangeEvent<HTMLInputElement>) => {searchBarAction(e)}} className={styles.searchBarBox} />
              <div className={styles.searchBtn} onClick={() => {searchAction();}}> Search </div>
            </div>

            {/* Links */}
            <div className={styles.linksHolder}>

              <div className={styles.linkContainer}>
                <Link href="/" className={styles.navLink} > Home </Link>
              </div>

              <div className={styles.linkContainer}>
                <Link href="#" className={styles.navLink}> About </Link>
              </div>

              <div className={styles.linkContainer}>
                <div className={styles.navLink}> Deals </div>
                <div className={styles.subLinksHolder}>
                  <div className={styles.subLinkContainer}>
                    <Link href="#" className={styles.navLink}> Daily Deals </Link>
                  </div>
                  <div className={styles.subLinkContainer}>
                    <Link href="#" className={styles.navLink}> Big Sale </Link>
                  </div>
                  <div className={styles.subLinkContainer}>
                    <Link href="#" className={styles.navLink}> Unsold Sale </Link>
                  </div>
                </div>
              </div>

              <div className={styles.linkContainer}>
                <div className={`${styles.navLink} ${login ? "" : styles.loginBtn}`}  
                  onClick={() => {login ? "" : setLogin(!login)}}> 
                    {login ? "@Master" : "Login / Signup"} 
                </div>
                {login ?
                <div className={styles.subLinksHolder}>
                  <div className={styles.subLinkContainer}>
                    <Link href="/profile" className={styles.navLink}> Profile </Link>
                  </div>
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
    </div>
  )
}

export default Navbar