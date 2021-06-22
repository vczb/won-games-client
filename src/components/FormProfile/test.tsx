import { screen, render } from 'utils/testUtils'

import FormProfile from '.'

describe('<FormProfile />', () => {
  it('should render the profile form', () => {
    render(<FormProfile />)

    expect(
      screen.getByRole('heading', { name: /my profile/gi })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
  })
})
