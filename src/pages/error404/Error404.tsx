/* eslint-disable react/no-unescaped-entities */
import { Link, useRouteError } from 'react-router-dom'
import styles from './error404.module.scss'

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.errorPage} >
      <div className={styles.error404} >404</div>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error