import {json, useLoaderData} from 'react-router-dom'
import Banner from '../../components/banner/Banner'
import Grid from '../../components/grid/Grid'
import {getLodgings} from '../../utils/api'

interface LodgingType {
  id: string
  title: string
  cover: string
  pictures: string[]
  description: string
  host: {name: string; picture: string}
  rating: string
  location: string
  equipments: string[]
  tags: string[]
}

const home = () => {
  const loaderData = useLoaderData() as LodgingType[]

  return (
    <div>
      <Banner />
      <Grid lodgings={loaderData} />
    </div>
  )
}

export default home

export const loader = async () => {
  const data = await getLodgings()
  return json(data, {status: 200})
}
