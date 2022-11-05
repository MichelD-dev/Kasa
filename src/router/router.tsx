import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Error404 from '../pages/error404/Error404'
import Home, {loader as lodgingsLoader} from '../pages/home/Home'
import About from '../pages/about/About'
import Lodging from '../pages/lodging/Lodging'
import Layout from '../layout/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={lodgingsLoader} errorElement={<Error404 />} />
      <Route path="about" element={<About />} errorElement={<Error404 />} />
      <Route
        path="lodging/:id"
        element={<Lodging />}
        errorElement={<Error404 />}
      />
      <Route path="*" element={<Error404 />} />
    </Route>,
  ),
)

export default router
