import {useLoaderData, useParams} from 'react-router-dom'
import Carrousel from '../../components/carrousel/Carrousel'
import Accordion, {
  AccordionToggle,
  AccordionPanel,
} from '../../components/accordion/Accordion'
import styles from './lodging.module.scss'
import {ensure} from '../../utils/typeGuards'
import {ReactComponent as Rating} from '../../assets/icons/rating-star.svg'

const Lodging = () => {
  const loaderData = useLoaderData() as LodgingType[]
  const {id} = useParams()

  const lodging = ensure(
    // Type guard au cas où lodging est undefined
    loaderData.find(obj => obj.id === id),
    'No lodging has been found',
  )

  return (
    <>
      <Carrousel lodging={lodging} />

      <section className={styles.infos}>
        <section className={styles.infosLeft}>
          <h1>{lodging.title}</h1>
          <p>{lodging.location}</p>
          <ul className={styles.tags}>
            {lodging.tags.map(tag => (
              <li key={`${tag}-${lodging.id}`}>
                <div className={styles.tag}>{tag}</div>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.infosRight}>
          <div className={styles.host}>
            <span>{lodging.host.name}</span>
            <div
              className={styles.hostImg}
              style={{
                backgroundImage: `url(${lodging.host.picture})`,
              }}
            ></div>
          </div>
          <ul>
            {Array.from(Array(5), (_, i) => (
              <li key={`id${i}`}>
                <Rating fill={i < +lodging.rating ? '#ff6060' : '#E3E3E3'} />
              </li>
            ))}
          </ul>
        </section>
      </section>

      <section className={styles.accordions}>
        <Accordion id="1" collapsible>
          <AccordionToggle>Description</AccordionToggle>
          <AccordionPanel>{lodging.description}</AccordionPanel>
        </Accordion>
        <Accordion id="2" collapsible>
          <AccordionToggle>Equipements</AccordionToggle>
          <AccordionPanel>
            <ul>
              {lodging.equipments.map(equipment => (
                <li key={`${equipment}-${lodging.id}`}>{equipment}</li>
              ))}
            </ul>
          </AccordionPanel>
        </Accordion>
      </section>
    </>
  )
}

export default Lodging
