import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Error404 from '../pages/error404/Error404'
import Layout from '../layout/Layout'
import Home from '../pages/home/Home'
import Lodging from '../pages/lodging/Lodging'
import About from '../pages/about/About'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="lodging/:id" element={<Lodging />} />
      <Route path="*" element={<Error404 />} />
    </Route>,
  ),
)

export default router
