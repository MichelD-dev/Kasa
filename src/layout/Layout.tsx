import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import styles from './layout.module.scss'

const Layout = () => (
  <div className={styles.layout}>
    <Header />
    <Suspense>
      <main>
        <Outlet />
      </main>
    </Suspense>
    <Footer />
  </div>
)

export default Layout
