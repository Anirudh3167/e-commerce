"use client"

import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Styles from '../signin/signin.module.css'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

function Signin() {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        let response = await fetch("http://localhost:3000/api/register", {
            headers: {
              "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({ username, email, password }),
            method: 'POST'
          });
        let result = await response.json();
          
        if (result['message'] === "Success") {
            const res = await signIn('credentials', {
                redirect: false,
                email,
                password,
              });
          
              if (!res.error) {
                // Authentication succeeded, handle the success case
                // For example, redirect to a protected page
                router.push('/');
              } else {
                // Authentication failed, handle the error case
                console.error(res.error);
              }
        } else {
           router.refresh();
        }
    }
  return (
    <div>
        <Head>
            <title> Sign Up | MESSANGER</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        </Head>
        <div className={Styles.mainWrapper}>
            <div className={Styles.mainContainer}>
                <div className={Styles.loginBox}>
                    <div className={Styles.logoSpace}>
                        TrendyHub
                    </div>
                    <form action="/" className={Styles.inputBox} onSubmit={handleSubmit}>
                        <input type="text" name='username' placeholder='User Name' />
                        <input type="email" name='email' placeholder='Email' />
                        <input type="password" name='password' placeholder='password' />
                        <div className={Styles.textBox}> Existing User? click on &nbsp; 
                            <Link href='/signin' style={{textDecoration:'underline',color:'blue'}}> SignIn </Link>
                        </div>
                        <button type='submit' className={Styles.submitbtn}> Sign Up </button>
                    </form>
                    <div className={Styles.extraText}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-- or -- <br /> continue with 
                    </div>
                    <div className={Styles.oauthIcons}> 
                        <i className="fab fa-google" style={{fontSize:'32px',cursor:"pointer"}}></i>
                        <i className="fab fa-github" style={{fontSize:'32px',cursor:"pointer"}}></i>
                        <i className="fab fa-linkedin" style={{fontSize:'32px',cursor:"pointer"}}></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin