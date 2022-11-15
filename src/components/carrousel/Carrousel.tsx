import {useState} from 'react'
import BtnSlider from './BtnSlider'
import styles from './carrousel.module.scss'

const Carrousel = ({lodging}: {lodging: LodgingType}) => {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    slideIndex !== lodging.pictures.length
      ? setSlideIndex(slideIndex => slideIndex + 1)
      : setSlideIndex(1)
  }
  const prevSlide = () => {
    setSlideIndex(slideIndex !== 1 ? 1 : lodging.pictures.length)
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

      {lodging.pictures.length > 1 && (
        <BtnSlider moveSlide={nextSlide} direction="next" />
      )}

      {lodging.pictures.length > 1 && (
        <BtnSlider moveSlide={prevSlide} direction="prev" />
      )}

      <div className={styles.count}>
        <p>{`${slideIndex}/${lodging.pictures.length}`}</p>
      </div>
    </div>
  )
}

export default Carrousel
