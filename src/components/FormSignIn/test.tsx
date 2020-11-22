import { screen } from '@testing-library/react'

import FormSignIn from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /Sign in now/i })
    ).toBeInTheDocument()
  })
  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByRole('link', { name: /forgot/i })).toBeInTheDocument()
  })
  it('should render the text and link to sign up ', () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByText(/Dont have an account/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Sign up/i })).toBeInTheDocument()
  })
})
