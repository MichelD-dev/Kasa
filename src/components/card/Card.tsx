import {Link} from 'react-router-dom'
import styles from './card.module.scss'

const Card = ({lodging: {title, cover, id}}: {lodging: LodgingType}) => (
  <Link to={`/lodging/${id}`}>
    <figure className={styles.card}>
      <img src={cover} alt={title} className={styles.img} />
      <figcaption className={styles.title}>{title}</figcaption>
    </figure>
  </Link>
)

export default Card
