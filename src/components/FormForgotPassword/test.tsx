import userEvent from '@testing-library/user-event'
import 'server.mock'
import { render, screen } from 'utils/testUtils'

import FormForgotPassword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}

useRouter.mockImplementation(() => ({
  query
}))

describe('<FormForgotPassword/>', () => {
  it('should render the form', () => {
    render(<FormForgotPassword />)
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /send email/i })
    ).toBeInTheDocument()
  })

  it('should validate email', async () => {
    render(<FormForgotPassword />)

    await userEvent.type(
      screen.getByPlaceholderText(/email/i),
      'valid@email.com'
    )

    userEvent.click(screen.getByRole('button', { name: /send email/i }))

    expect(await screen.findByText(/You just received an email!/i))
  })

  it('should show an invalid email', async () => {
    render(<FormForgotPassword />)

    await userEvent.type(screen.getByPlaceholderText(/email/i), 'invalid')

    userEvent.click(screen.getByRole('button', { name: /send email/i }))

    expect(await screen.findByText(/must be a valid email/i))
  })

  it('should show and inexistent email error', async () => {
    render(<FormForgotPassword />)

    await userEvent.type(
      screen.getByPlaceholderText(/email/i),
      'false@email.com'
    )

    userEvent.click(screen.getByRole('button', { name: /send email/i }))

    expect(await screen.findByText(/This email does not exist/i))
  })

  it('should autofill if comes via logged user', () => {
    query = { email: 'valid@email.com' }

    render(<FormForgotPassword />)

    expect(screen.getByPlaceholderText(/email/i)).toHaveValue('valid@email.com')
  })
})
