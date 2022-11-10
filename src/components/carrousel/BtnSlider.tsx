import leftArrow from '../../assets/icons/left-chevron.svg'
import rightArrow from '../../assets/icons/right-chevron.svg'
import styles from './carrousel.module.scss'

const BtnSlider = ({
  direction,
  moveSlide,
}: {
  direction: string
  moveSlide: () => void
}) => (
  <button
    onClick={moveSlide}
    className={`${styles.btnSlide} ${
      direction === 'next' ? styles.next : styles.prev
    }`}
  >
    {direction === 'next' ? <img src={rightArrow} alt=''/> : <img src={leftArrow} alt=''/>}
  </button>
)

export default BtnSlider
