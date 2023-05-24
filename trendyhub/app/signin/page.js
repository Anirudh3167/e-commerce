"use client"
// React Imports
import React from 'react'

// NextJs in-built imports
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/navigation'

// Styles Imports
import Styles from './signin.module.css'

// Next-Auth imports
import { signIn } from 'next-auth/react'


function Signin() {
    const router = useRouter();

    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const email = event.target.email.value;
      const password = event.target.password.value;
  
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
  
      if (!result.error) {
        // Authentication succeeded, handle the success case
        // For example, redirect to a protected page
        router.push('/');
      } else {
        // Authentication failed, handle the error case
        console.error(result.error);
      }
    };
  return (
    <div>
        <Head>
            <title> Sign In | TrendyHub</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        </Head>
        <div className={Styles.mainWrapper}>
            <div className={Styles.mainContainer}>
                <div className={Styles.loginBox}>
                    <div className={Styles.logoSpace}>
                        TrendyHub
                    </div>
                    <form className={Styles.inputBox} onSubmit={handleSubmit}>
                        <input type="email" name='email' placeholder='Email' />
                        <input type="password" name='password' placeholder='password' />
                        <div className={Styles.textBox}> New User? click on &nbsp; 
                            <Link href='/signup' style={{textDecoration:'underline',color:'blue'}}> SignUp </Link>
                        </div>
                        <button className={Styles.submitbtn} type='submit'> Sign In </button>
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