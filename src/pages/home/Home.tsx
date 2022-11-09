import {useLoaderData} from 'react-router-dom'
import Banner from '../../components/banner/Banner'
import Grid from '../../components/grid/Grid'

const Home = () => {
  const loaderData = useLoaderData() as LodgingType[]

  return (
    <>
      <Banner
        bannerURL="media/home-banner.jpg"
        punchline="Chez vous, partout et ailleurs"
      />
      <Grid lodgings={loaderData} />
    </>
  )
}

export default Home
