import {NavLink} from 'react-router-dom'
import styles from './navbar.module.scss'

const Navbar = () => (
  <ul className={styles.navbar}>
    <li className={styles.link}>
      <NavLink
        to="/"
        className={({isActive}: {isActive: boolean}) =>
          isActive ? styles.active : undefined
        }
      >
        Accueil
      </NavLink>
    </li>
    <li className={styles.link}>
      <NavLink
        to="/about"
        className={({isActive}: {isActive: boolean}) =>
          isActive ? styles.active : undefined
        }
      >
        A Propos
      </NavLink>
    </li>
  </ul>
)

export default Navbar
