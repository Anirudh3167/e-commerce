import React from 'react'
import Styles from './page.module.css'

export default function AddProduct() {
  return (
    <div className={Styles.mainWrapper}>
        <div className={Styles.mainContainer}>

            <form action="/" method='POST' className={Styles.formWrapper}>
                <input type="text" placeholder='Product Name' />
                <input type="text" placeholder='Product Desc' />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </form>

        </div>
    </div>
  )
}
