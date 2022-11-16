import {useMemo} from 'react'
import Card from '../card/Card'
import styles from './grid.module.scss'

const Grid = (data: LodgingsType) => {
  return (
    <section className={styles.grid}>
      {useMemo(() => {
        return data.data?.length ? (
          data.data.map((lodging: LodgingType) => (
            <div key={lodging.id}>
              <Card lodging={lodging} />
            </div>
          ))
        ) : (
          <p className={styles.error}  >Pas d'appartements trouvés</p>
        )
      }, [data])}
    </section>
  )
}

export default Grid
