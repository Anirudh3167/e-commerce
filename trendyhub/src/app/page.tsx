import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '../../components/Navbar/page'

export default function Home() {
  return (
    <div className={styles.mainWrapper}>
      <Navbar />
      <div className={styles.mainContainer}>
        This is a home page.
      </div>
    </div>
  )
}
