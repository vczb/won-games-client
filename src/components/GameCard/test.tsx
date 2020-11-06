import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'
import theme from 'styles/theme'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByText(/Population Zero/i)).toBeInTheDocument()
  })
  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByText(/235/i)).toBeInTheDocument()

    expect(screen.getByText(/235/i)).not.toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText(/235/i)).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('should render a line-trough in price when promotional', () => {
    renderWithTheme(<GameCard promotionalPrice="R$ 100,00" {...props} />)

    expect(screen.getByText(/100/i)).toBeInTheDocument()

    expect(screen.getByText(/235/i)).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText(/100/i)).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })
})
