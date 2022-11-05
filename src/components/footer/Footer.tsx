import K from '../../assets/footer-brand/Vector.svg'
import S from '../../assets/footer-brand/Vector-1.svg'
import A from '../../assets/footer-brand/Vector-2.svg'
import Home from '../../assets/footer-brand/Vector-3.svg'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={K} alt="Lettre K de KASA" />
      <img src={Home} alt="Symbole Home remplaçant le premier A de KASA" />
      <img src={S} alt="Lettre S de KASA" />
      <img src={A} alt="Lettre A de KASA" />
      <div className={styles.div}>
        <p className={styles.p}>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
