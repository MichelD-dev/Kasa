import {screen} from '@testing-library/react'
import renderWithRouter from '../../utils/RenderWithRouter'
import Header from './Header'

test('test UI header', () => {
  renderWithRouter(<Header />)

  expect(screen.getByRole('img', {name: /logo de kasa/i})).toBeInTheDocument()
  expect(screen.getByRole('link', {name: /accueil/i})).toBeInTheDocument()
  expect(screen.getByRole('link', {name: /a propos/i})).toBeInTheDocument()
})
