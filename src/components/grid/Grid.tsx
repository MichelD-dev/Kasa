// import {useRef} from 'react'
// import {useIntersectionObserver} from '../../utils/hooks/intersectionObserver'
import {useMemo} from 'react'
import Card from '../card/Card'
import styles from './grid.module.scss'

const Grid = ({lodgings}: LodgingsType) => {
  // console.log(performance.now())
  // const thumbWrapper = useRef<HTMLDivElement | null>(null)
  // const {isIntersecting} = useIntersectionObserver(thumbWrapper)

  return (
    // ref={thumbWrapper}
    <section className={styles.grid}>
      {useMemo(() => {
        // isIntersecting &&
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
