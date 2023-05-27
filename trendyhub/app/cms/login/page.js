"use client"

import React from 'react'
import Link from 'next/link'
import Styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Login() {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        let username = e.target.Username.value;
        let password = e.target.Password.value;

        const response = await fetch("http://localhost:3000/api/cms/login",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username:username,
                password:password
            })
        });
        const result = await response.json();

        console.log(result);
        if (result.message === "success") {
            console.log("Sucessfully logged in");
            router.push('/cms/add-product');
        }
        else {
            console.log("There is an error");
        }
    }
  return (
    <div className={Styles.mainWrapper}>
        <div className={Styles.mainContainer}>

            <form action='/' method='POST' className={Styles.loginBox} onSubmit={handleSubmit}>
                <div className={Styles.logoSpace}> TrendyHub </div>
                <div className={Styles.inputBox}>
                    <input type="text" name='Username' placeholder='Username'/>
                    <input type="password" name='Password' placeholder='Password' />
                </div>
                <button type='submit' className={Styles.loginBtn}> Login </button>
                <div className={Styles.caution}>
                    For any problems contact &nbsp; <Link href='#' style={{textDecoration:'underline',color:'blue'}}> here </Link>
                </div>
            </form>

        </div>
    </div>
  )
}
