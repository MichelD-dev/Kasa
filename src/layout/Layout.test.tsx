import {screen} from '@testing-library/react'
import renderWithRouter from '../utils/RenderWithRouter'
import Layout from '../layout/Layout'

test('test UI header', async () => {
  renderWithRouter(<Layout />)

  expect(screen.getByRole('img', {name: /logo de kasa/i})).toBeInTheDocument()
  expect(screen.getByRole('link', {name: /accueil/i})).toBeInTheDocument()
  expect(screen.getByRole('link', {name: /a propos/i})).toBeInTheDocument()
  
  expect(screen.getByRole('banner')).toBeInTheDocument()
  expect(screen.getByRole('contentinfo')).toBeInTheDocument()
})
