import {screen} from '@testing-library/react'
import renderWithRouter from '../../utils/RenderWithRouter'
import Layout from '../../layout/Layout'

test('full app rendering/navigating', async () => {
  const {user} = renderWithRouter(<Layout />)

  await user.click(screen.getByText(/accueil/i))
  expect(screen.getByText(/accueil/i)).toBeInTheDocument()

  await user.click(screen.getByText(/a propos/i))
  expect(screen.getByText(/a propos/i)).toBeInTheDocument()
})

test.todo('When user is in /about route then render About component')
test.todo('When user is in /lodging route then render Lodging component')

// test('landing on a bad page', () => {
//   renderWithRouter(<Layout />, {route: '/something-that-does-not-match'})

//   expect(screen.getByText(/error/i)).toBeInTheDocument()
// })
