import useFetch from '../../api/api'
import Banner from '../../components/banner/Banner'
import Grid from '../../components/grid/Grid'
import styles from './home.module.scss'

const Home = () => {
  const {isLoading, data, error}: JSONResponseType = useFetch(
    '../data/logements.json',
    'lodgings',
  )

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
      {isLoading && !error && <p className={styles.loadingText}>Loading...</p>}
      {data && data.length !== 0 && <Grid data={data} />}
      {error && <p className={styles.loadingText}>{error}</p>}
    </>
  )
}

export default Home
