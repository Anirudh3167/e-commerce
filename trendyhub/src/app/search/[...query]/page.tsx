import React from 'react'

import styles from './page.module.css'
import Navbar from '../../../../components/Navbar/page'
import { useRouter } from 'next/navigation'

function page({params} : {params: {query:string}}) {
  const query = decodeURIComponent(params.query);
  return (
    <div>
        <Navbar />
        <div className={styles.mainConatiner}>
            Your search:{query}
        </div>
    </div>
  )
}

export default page