import {Suspense} from 'react'
import {Await, useAsyncValue, useLoaderData, useParams} from 'react-router-dom'
import {ReactComponent as Rating} from '../../assets/icons/rating-star.svg'
import Carrousel from '../../components/carrousel/Carrousel'
import Collapse from '../../components/collapse/Collapse'
import {CollapseToggle} from '../../components/collapse/CollapseToggle/CollapseToggle'
import {CollapsePanel} from '../../components/collapse/CollapsePanel/CollapsePanel'
import Tag from '../../components/tag/Tag'
import List from '../../utils/GenericList'
import Error404 from '../error404/Error404'
import {ensure} from '../../utils/typeGuards'
import styles from './lodging.module.scss'

const Lodging = () => {
  const loaderData = useLoaderData() as LodgingsType

  return (
    <Suspense
      fallback={
        <section className={styles.loadingText}>
          <p>Loading data...</p>
        </section>
      }
    >
      <Await resolve={loaderData.lodgings} errorElement={<Error404 />}>
        <LodgingSection />
      </Await>
    </Suspense>
  )
}

const LodgingSection = () => {
  const lodgings = useAsyncValue() as LodgingType[]
  const {id} = useParams()

  const lodging = ensure(
    // Type guard au cas où lodging est undefined
    lodgings.find(obj => obj.id === id),
    'No lodging has been found',
  )

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
      <section className={styles.collapses}>
        <Collapse id="1">
          <CollapseToggle>Description</CollapseToggle>
          <CollapsePanel>{lodging.description}</CollapsePanel>
        </Collapse>
        <Collapse id="2">
          <CollapseToggle>Equipements</CollapseToggle>
          <CollapsePanel>
            <List data={lodging.equipments} renderItem={item => <>{item}</>} />
          </CollapsePanel>
        </Collapse>
      </section>
    </>
  )
}

export default Lodging
