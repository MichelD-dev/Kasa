import {useState} from 'react'
import BtnSlider from './BtnSlider'
import styles from './carrousel.module.scss'

const Carrousel = ({lodging}: {lodging: LodgingType}) => {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== lodging.pictures.length) {
      setSlideIndex(slideIndex => slideIndex + 1)
    } else if (slideIndex === lodging.pictures.length) {
      setSlideIndex(1)
    }
  }
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex => slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(lodging.pictures.length)
    }
  }

  return (
    <div className={styles.containerSlider}>
      {lodging.pictures.map((img, id) => {
        return (
          <div
            key={img}
            className={`${styles.slide} ${
              slideIndex === id + 1 && styles.activeAnim
            }`}
          >
            <img src={img} alt="" />
          </div>
        )
      })}
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />
      <div className={styles.count}>
        <p>{`${slideIndex}/${lodging.pictures.length}`}</p>
      </div>
    </div>
  )
}

export default Carrousel
