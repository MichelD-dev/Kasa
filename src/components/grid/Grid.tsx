import {useMemo} from 'react'
import Card from '../card/Card'
import styles from './grid.module.scss'

const Grid = ({lodgings}: LodgingsType) => {
  return (
    <section className={styles.grid}>
      {useMemo(() => {
        return lodgings.length ? (
          lodgings.map(lodging => (
            <div key={lodging.id}>
              <Card lodging={lodging} />
            </div>
          ))
        ) : (
          <p>No lodgings</p>
        )
      }, [lodgings])}
    </section>
  )
}

export default Grid
