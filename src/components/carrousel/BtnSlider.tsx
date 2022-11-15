import leftArrow from '../../assets/icons/left-chevron.svg'
import rightArrow from '../../assets/icons/right-chevron.svg'
import Input from '../../utils/GenericInput'
import styles from './carrousel.module.scss'

const BtnSlider = ({
  direction,
  moveSlide,
  ...props
}: {
  direction: string
  moveSlide: () => void
}) => (
  <Input
    type="image"
    onClick={moveSlide}
    className={`${styles.btnSlide} ${
      direction === 'next' ? styles.next : styles.prev
    }`}
    src={direction === 'next' ? rightArrow : leftArrow}
    alt=""
    {...props}
  ></Input>
)

export default BtnSlider
