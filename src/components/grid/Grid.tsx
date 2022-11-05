import Card from '../card/Card'
import styles from './grid.module.scss'

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

const Grid = ({lodgings}: {lodgings: LodgingType[]}) => {
  return (
    <section className={styles.grid}>
      {lodgings.length ? (
        lodgings.map(lodging => (
          <div key={lodging.id}>
            <Card lodging={lodging} />
          </div>
        ))
      ) : (
        <p>No lodgings</p>
      )}
      {/* <Card /> */}
    </section>
  )
}

export default Grid
