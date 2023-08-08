"use client"
import React, { useState} from 'react'

import styles from './page.module.css'
import Navbar from '../../../components/Navbar/page'
import Link from 'next/link'

function Profile() {
  const [userData,setUserData] = useState({
    "fname":"Master","lname":"Master", "username" : "Master",
    "email":"master@gmail.com",
    "phone":"1123456789",
    "country":"India",
    "City":"Delhi",
    "pincode" : "110091",
    "address" : "Rithala,Delhi,India",
    "profilepic":"",
    "orders":[],
    "wishlist":[],
    "reviews":[],
    "membership":"general"
  }) 
  const [editDetails,setEditDetails] = useState(false);
  return (
    <div>
        <Navbar />
        <div className={styles.mainContainer}>
                                                                {/* User Details */}
            <div className={styles.editDetails} onClick={()=>{setEditDetails(!editDetails)}}>{editDetails ? "save" : "Edit"}</div>
            <div className={styles.userDetailsWrapper}>
                <div className={styles.headingItem}> Personal Info </div>
                <div className={styles.userDetailsContainer}>
                    <div className={styles.profilePicContainer}>      {/* Left Side */}
                        <div className={styles.profilePic}> M </div>
                        <div className={styles.profileUsername}> @{userData.username} </div>
                    </div>
                    <div className={styles.profileDetails}>        {/* Right Side */}
                        <div className={styles.detailsItem}>
                            First Name
                            <input type="text" className={styles.InputBox} defaultValue={userData.fname} readOnly={!editDetails} />
                        </div>
                        <div className={styles.detailsItem}>
                            Last Name
                            <input type="text" className={styles.InputBox} defaultValue={userData.lname} readOnly={!editDetails} />
                        </div>
                    </div>
                </div>
                <div className={styles.otherUserDetails}>
                    <div className={styles.detailsItem}>
                        Email
                        <input type="email" className={styles.InputBox} defaultValue={userData.email} readOnly={true} />
                    </div>
                    <div className={styles.detailsItem}>
                        Phone
                        <input type="tel" className={styles.InputBox} defaultValue={userData.phone} readOnly={true} />
                    </div>
                </div>
                <div className={styles.otherUserDetails}>
                    <div className={styles.headingItem}> Address </div>
                    <div className={styles.detailsItem}>
                        Country:
                        <input type="text" className={styles.InputBox} defaultValue={userData.country} readOnly={!editDetails} />
                    </div>
                    <div className={styles.detailsItem}>
                        City:
                        <input type="text" className={styles.InputBox} defaultValue={userData.City} readOnly={!editDetails} />
                    </div>
                    <div className={styles.detailsItem}>
                        pincode:
                        <input type="number" className={styles.InputBox} defaultValue={userData.pincode} readOnly={!editDetails} />
                    </div>
                    <div className={styles.detailsItem}>
                        Address:
                        <input type="text" className={styles.InputBox} defaultValue={userData.address} readOnly={!editDetails} />
                    </div>
                </div>
            </div>

            <div className={styles.userOptions}>
                <div className={styles.headingItem}> Others </div>
                <Link href="#" className={styles.OptionsItem}> Orders </Link>
                <Link href="#" className={styles.OptionsItem}> Wishlist </Link>
                <Link href="#" className={styles.OptionsItem} style={{backgroundColor:"red",color:"white"}}> Logout </Link>
            </div>
        </div>
    </div>
  )
}

export default Profile