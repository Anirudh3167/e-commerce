'use client'

import React, { useState } from 'react';

import Image from 'next/image'
import styles from './loginSignUp.module.css'
import Navbar from '../../../components/Navbar/page'

export default function LoginSignUp() {
    const [isLogin, setIsLogin] = useState(true);
    const signInValue = "Sign In";

    const handleSignupBtnClick = () => {
        setIsLogin((prevIsLogin) => !prevIsLogin);
    };

    return (
        <div className={styles.mainWrapper}>
            <Navbar />
            <div className={styles.login}>
                <div className={styles.container}>
                    <div className={styles.colLeft}>
                    <div className={styles.loginText}>
                        <h2>Welcome!</h2>
                        <p>Create your account.<br />For Free!</p>
                        <button className={styles.btn} onClick={handleSignupBtnClick}>
                        {isLogin ? "Sign Up" : "Login"}
                        </button>
                    </div>
                    </div>

                    <div className={styles.colRight}>
                        <div className={styles.loginForm}>
                            <h2>{isLogin ? "Login" : "Signup"}</h2>
                            <form action="">
                            <p>
                                <label>Username/Email address<span>*</span></label>
                                <input type="text" placeholder="Username or Email" required />
                            </p>
                            <p>
                                <label>Password<span>*</span></label>
                                <input type="password" placeholder="Password" required />
                            </p>
                            <p>
                                <input type="submit" value={isLogin ? signInValue : "Sign Up"} />
                            </p>
                            {isLogin && (
                                <p>
                                <a href="">Forgot password?</a>
                                </p>
                            )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}