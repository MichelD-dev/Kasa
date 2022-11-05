import {render, screen} from '@testing-library/react'
import Footer from './Footer'

test('test UI footer', () => {
  render(<Footer />)

  expect(
    screen.getByRole('img', {name: /Lettre K de KASA/i}),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('img', {name: /Symbole Home remplaçant le premier A de KASA/i}),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('img', {name: /Lettre S de KASA/i}),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('img', {name: /Lettre A de KASA/i}),
  ).toBeInTheDocument()
  expect(
    screen.getByText(/© 2020 kasa\. all rights reserved/i),
  ).toBeInTheDocument()
})
