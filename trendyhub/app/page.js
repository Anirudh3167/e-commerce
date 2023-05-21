import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Styles from './page.module.css'

export default function Home() {
  return (
   <main className={Styles.mainWrapper}>
    <Navbar />
    <div className={Styles.mainContainer}>
      This is the Home Page.
    </div>
    <Footer />
   </main> 
  )
}
