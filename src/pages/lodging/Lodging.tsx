import {useLoaderData, useParams} from 'react-router-dom'
import Carrousel from '../../components/carrousel/Carrousel'
import Accordion from '../../components/accordion/Accordion'
import {AccordionToggle} from '../../components/accordion/AccordeonToggle/AccordeonToggle'
import {AccordionPanel} from '../../components/accordion/AccordeonPanel/AccordeonPanel'
import Tag from '../../components/tag/Tag'
import {ReactComponent as Rating} from '../../assets/icons/rating-star.svg'
import {ensure} from '../../utils/typeGuards'
import styles from './lodging.module.scss'
import List from '../../utils/GenericList'

const Lodging = () => {
  const loaderData = useLoaderData() as LodgingType[]
  const {id} = useParams()

  const lodging = ensure(
    // Type guard au cas où lodging est undefined
    loaderData.find(obj => obj.id === id),
    'No lodging has been found',
  )

  const lodgingIndex = loaderData.indexOf(lodging)

  return (
    <>
      <Carrousel lodging={lodging} />

      <section className={styles.infos}>
        <section className={styles.infosLeft}>
          <h1>{lodging.title}</h1>
          <p>{lodging.location}</p>
          <List
            data={lodging.tags}
            className={styles.tags}
            renderItem={tag => <Tag className={styles.tag} text={tag}></Tag>}
          />
          {/* <ul className={styles.tags}>
            {lodging.tags.map(tag => (
              <li key={`${tag}-${lodging.id}`}>
                <Tag className={styles.tag} text={tag}></Tag>
              </li>
            ))} 
          </ul>
            */}
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
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <li key={`id${i}`}>
                  <Rating fill={i < +lodging.rating ? '#ff6060' : '#E3E3E3'} />
                </li>
              ))}
          </ul>
        </section>
      </section>

      <section className={styles.accordions}>
        <Accordion id="1">
          <AccordionToggle>Description</AccordionToggle>
          <AccordionPanel>{lodging.description}</AccordionPanel>
        </Accordion>
        <Accordion id="2">
          <AccordionToggle>Equipements</AccordionToggle>
          <AccordionPanel>
            <List
              data={loaderData[lodgingIndex].equipments}
              renderItem={item => <>{item}</>}
            />
            {/* <ul>
              {lodging.equipments.map(equipment => (
                <li key={`${equipment}-${lodging.id}`}>{equipment}</li>
              ))}
            </ul> */}
          </AccordionPanel>
        </Accordion>
      </section>
    </>
  )
}

export default Lodging
