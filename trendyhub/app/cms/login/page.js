import React from 'react'
import Link from 'next/link'
import Styles from './page.module.css'

export default function Login() {
  return (
    <div className={Styles.mainWrapper}>
        <div className={Styles.mainContainer}>

            <form action='/' method='POST' className={Styles.loginBox}>
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
