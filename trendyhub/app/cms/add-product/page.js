import React from 'react'
import Styles from './page.module.css'

export default function AddProduct() {
  return (
    <div className={Styles.mainWrapper}>
        <div className={Styles.mainContainer}>

            <form action="/" method='POST' className={Styles.formWrapper}>
                <div className={Styles.productTitle}> Product </div>
                <input type="text" name='Title' placeholder='Product Name' />
                <input type="text" name='SubTitle' placeholder='Product sub-Title' />
                <textarea type="text" name='Content' placeholder='Product Dscription' style={{width:'calc(100% - 20px)',height:'400px',margin:'10px'}} />
                <input type="text" name='Price' placeholder='Price' />
                <input type="text" name='Stock' placeholder='Stock' />
                <input type="text" name='Company' placeholder='Company' />
                <input type="date" name='MFDdate' placeholder='M.F.D' />
                <input type="date" name='EntryDate' placeholder='Entry Date' />
                <input type="date" name='EXPdate' placeholder='EXP date' />
                <input type="text" name='Contains' placeholder='Product Contains' />
            </form>

        </div>
    </div>
  )
}
