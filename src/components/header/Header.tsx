import logo from '../../assets/logo/logo.svg'
import Navbar from '../navbar/Navbar'
import styles from './header.module.scss'

const Header = () => {
  return (
    <header role="banner" className={styles.header}>
      <img src={logo} alt="Logo de KASA" />
      <Navbar />
    </header>
  )
}

export default Header
