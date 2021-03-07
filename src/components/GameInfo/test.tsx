import { screen } from '@testing-library/react'
import GameInfo from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  title: 'Game Title',
  description: 'Game Description',
  price: 200
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /game title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/game description/i)).toBeInTheDocument()
    expect(screen.getByText(/\$200/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
