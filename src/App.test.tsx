import { screen, render } from '@testing-library/react'
import { App } from './App'

describe('App component', () => {
  test('', () => {
    render(<App />)
    screen.getByAltText('image')
  })
})
