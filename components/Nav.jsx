import {GrFacebook} from 'react-icons/gr'
import{BsTwitter} from 'react-icons/bs'
import styles from '@/styles/Nav.module.css'

export default function Nav(){
  return(
    <nav className={styles.nav}>
      <h2 className={styles.nav_title}>Una Opinión Más</h2>
      <div className={styles.nav_socialNetworkIcons}>
        <a href="#">
          <GrFacebook />
        </a>
        <a href="#">
          <BsTwitter />
        </a>
        <a href="#">
          
        </a>

      </div>
    </nav>
  )
}