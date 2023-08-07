"use client"
import React, { useState} from 'react'

import styles from './page.module.css'
import Navbar from '../../../components/Navbar/page'

function Profile() {
  const [userData,setUserData] = useState({
    "fname":"Master","lname":"Master", "username" : "Master",
    "email":"master@gmail.com",
    "phone":"1123456789",
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
                                                                {/* User Details on Left Side */}
            <div className={styles.leftContainer}>
                <button className={styles.editDetails} onClick={() => {setEditDetails(!editDetails)}}> {editDetails ? "save":"Edit"} </button>
                <div className={styles.userDetailsSection}>
                    <div className={styles.profilePicContainer}>
                        <div className={styles.profilePic}> M </div>
                        <div className={styles.profileUsername}> @{userData.username} </div>
                    </div>
                    <div className={styles.profileContent}> 
                        First Name :
                        <input type="text" className={styles.InputBox} defaultValue={userData.fname} readOnly={!editDetails} />
                    </div>
                    <div className={styles.profileContent}> 
                        Last Name :
                        <input type="text" className={styles.InputBox} defaultValue={userData.lname} readOnly={!editDetails} />
                    </div>
                    <div className={styles.profileContent}> 
                        Email :
                        <input type="email" className={styles.InputBox} defaultValue={userData.email} readOnly={!editDetails} />
                    </div>
                    <div className={styles.profileContent}> 
                        Phone :
                        <input type="tel" className={styles.InputBox} defaultValue={userData.phone} readOnly={!editDetails} />
                    </div>
                </div>
            </div>
                                                            {/* Oreders and all on Right Side */}
            <div className={styles.rightContainer}>
                No Details Yet.
            </div>
        </div>
    </div>
  )
}

export default Profile