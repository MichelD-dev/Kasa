import {Suspense} from 'react'
import {useLoaderData, Await} from 'react-router-dom'
import Banner from '../../components/banner/Banner'
import Grid from '../../components/grid/Grid'
import Error404 from '../error404/Error404'
import styles from './home.module.scss'

const Home = () => {
  const loaderData = useLoaderData() as LodgingsType

  const PUNCHLINE_TEXT = 'Chez vous, partout et ailleurs'

  const punchline = () => {
    const text = PUNCHLINE_TEXT.split(', ')

    return (
      <>
        {`${text.at(0)},`}&nbsp;
        <span>{text.at(1)}</span>
      </>
    )
  }

  return (
    <>
      <Banner bannerImgURL="media/home-banner.jpg" punchline={punchline()} />
      <Suspense
        fallback={
          <section className={styles.loadingText}>
            <p>Loading data...</p>
          </section>
        }
      >
        <Await resolve={loaderData.lodgings} errorElement={<Error404 />}>
          {loadedLodgings => <Grid lodgings={loadedLodgings} />}
        </Await>
      </Suspense>
    </>
  )
}

export default Home
