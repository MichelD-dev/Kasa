import {NavLink} from 'react-router-dom'
import styles from './navbar.module.scss'

const Navbar = () => {
  return (
    <ul className={styles.navbar}>
      <li className={styles.link}>
        <NavLink to="/">Accueil</NavLink>
      </li>
      <li className={styles.link}>
        <NavLink to="/about">A Propos</NavLink>
      </li>
    </ul>
  )
}

export default Navbar
