import styles from './card.module.scss'

interface LodgingType {
  id: string
  title: string
  cover: string
  pictures: string[]
  description: string
  host: {name: string; picture: string}
  rating: string
  location: string
  equipments: string[]
  tags: string[]
}

const Card = ({lodging: {title, cover}}: {lodging: LodgingType}) => {

  return (
    <div className={styles.card}>
      <p>{title}</p>{' '}
    </div>
  )
}

export default Card
