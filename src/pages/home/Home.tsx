import {useLoaderData} from 'react-router-dom'
import Banner from '../../components/banner/Banner'
import Grid from '../../components/grid/Grid'
import {LodgingType} from '../../types'

const Home = () => {
  const loaderData = useLoaderData() as LodgingType[]

  const punchlineText = 'Chez vous, partout et ailleurs'

  const punchline = () => {
    const text = punchlineText.split(', ')

    return (
      <>
        {/* {punchlineText} */}
        {`${text.at(0)},  `}
        <span>{text.at(1)}</span>
      </>
    )
  }

  return (
    <>
      <Banner bannerImgURL="media/home-banner.jpg" punchline={punchline()} />
      <Grid lodgings={loaderData} />
    </>
  )
}

export default Home
