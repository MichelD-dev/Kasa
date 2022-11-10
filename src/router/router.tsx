import {lazy} from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Error404 from '../pages/error404/Error404'
import Layout from '../layout/Layout'
import loader from '../utils/api/api'

const Home = lazy(() => import('../pages/home/Home'))
const About = lazy(() => import('../pages/about/About'))
const Lodging = lazy(
  () => import(/* webpackPrefetch: true */ '../pages/lodging/Lodging'),
)

const lodgingsLoader = () => loader('../data/logements.json', 'lodgings')

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={<Home />}
        loader={lodgingsLoader}
        errorElement={<Error404 />}
      />
      <Route path="about" element={<About />} errorElement={<Error404 />} />
      <Route
        path="lodging/:id"
        element={<Lodging />}
        loader={lodgingsLoader}
        errorElement={<Error404 />}
      />
      <Route path="*" element={<Error404 />} />
    </Route>,
  ),
)

export default router
