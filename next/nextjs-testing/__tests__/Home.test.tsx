import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'
import "setimmediate"

it('Should render hello text', () => {
  render(<Home />)
  expect(screen.getByText('Hello Nextjs')).toBeInTheDocument()
})