import {ReactComponent as Logo} from '../../assets/logo/logo.svg'
import Navbar from '../navbar/Navbar'
import styles from './header.module.scss'

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <Navbar />
  </header>
)

export default Header
