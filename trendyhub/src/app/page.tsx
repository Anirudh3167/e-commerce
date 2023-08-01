import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '../../components/Navbar/page'

export default function Home() {
  return (
    <div className={styles.mainWrapper}>
      <Navbar />
      <div className={styles.mainContainer}>
        Sliders will be here for categories :- <br />
        1. Big Slider for Brand Ads <br />
        2. Slider for Latest <br />
        3. Slider for Trending <br />
        4. Slider for Electronics <br />
      </div>
    </div>
  )
}
