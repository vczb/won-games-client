import { screen } from '@testing-library/react'

import Auth from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    expect(screen.getAllByRole('img')).toHaveLength(2)

    expect(screen.getByText(/All you favorite/i)).toBeInTheDocument()

    expect(
      screen.getByText(/is the best and most complete gaming platform/i)
    ).toBeInTheDocument()

    expect(screen.getByText(/Auth Title/i)).toBeInTheDocument()

    expect(screen.getByText(/Won Games 2020/i)).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
