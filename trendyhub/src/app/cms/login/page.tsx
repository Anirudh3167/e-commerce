"use client"
import React,{ useState } from 'react'


import styles from './page.module.css'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

function page() {
  const [uid,setUid] = useState("");
  const [pass,setPass] = useState("");
  const [showPass,setShowPass] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    if (uid === "master" && pass === "master") {
        router.push("/cms/add-product");
    } else {
        alert("Invalid Credentials");
    }
  }
  return (
    <div className={styles.LoginWrapper}>
        <div className={styles.LoginContainer}>
            <div className={styles.inputContainer}>
                <div className={styles.inputHead}> User Id </div>
                <input className={styles.inputBox} type="text" onChange={(e) => {setUid(e.target.value)}} placeholder='username' />
            </div>
            <div className={styles.inputContainer}>
                <div className={styles.inputHead}> Password </div>
                <div className={styles.passwordContainer}>
                    <input className={styles.inputBox} type={showPass ? "text" : "password"} onChange={(e) => {setPass(e.target.value)}} placeholder='password' />
                    <div className={styles.showPass} onClick={()=>{setShowPass(!showPass)}}>
                        {showPass ?
                            <AiFillEye />
                        : <AiFillEyeInvisible />
                        }
                    </div>
                </div>
            </div>
            <div className={styles.submitBtn} onClick={()=>{handleSubmit()}}> Submit </div>
        </div>
    </div>
  )
}

export default page