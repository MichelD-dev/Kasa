// import {useRef} from 'react'
// import {useIntersectionObserver} from '../../utils/hooks/intersectionObserver'
import {useMemo} from 'react'
import Card from '../card/Card'
import styles from './grid.module.scss'

const Grid = ({lodgings}: {lodgings: LodgingType[]}) => {
  // console.log(performance.now())
  // const thumbWrapper = useRef<HTMLDivElement | null>(null)
  // const {isIntersecting} = useIntersectionObserver(thumbWrapper)

  return (
    <div
    // ref={thumbWrapper}
    >
      <section className={styles.grid}>
        {lodgings.length ? (
          // isIntersecting &&
          useMemo(() => {
            return lodgings.map(lodging => (
              <div key={lodging.id}>
                <Card lodging={lodging} />
              </div>
            ))
          }, [lodgings])
        ) : (
          <p>No lodgings</p>
        )}
      </section>
    </div>
  )
}

export default Grid
