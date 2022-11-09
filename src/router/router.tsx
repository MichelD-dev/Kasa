import {lazy, Suspense} from 'react'
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
const Lodging = lazy(() => import('../pages/lodging/Lodging'))

const lodgingsLoader = () => loader('../data/logements.json', 'lodgings')

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Home />
          </Suspense>
        }
        loader={lodgingsLoader}
        errorElement={<Error404 />}
      />
      <Route
        path="about"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <About />
          </Suspense>
        }
        errorElement={<Error404 />}
      />
      <Route
        path="lodging/:id"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Lodging />
          </Suspense>
        }
        loader={lodgingsLoader}
        errorElement={<Error404 />}
      />
      <Route path="*" element={<Error404 />} />
    </Route>,
  ),
)

export default router
