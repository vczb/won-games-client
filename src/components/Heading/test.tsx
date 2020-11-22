import { screen } from '@testing-library/react'
import Heading from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

describe('<Heading />', () => {
  it('should render a black reading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a white reading', () => {
    renderWithTheme(<Heading color="white">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a reading with a line to the left side', () => {
    renderWithTheme(
      <Heading lineLeft lineColor="secondary">
        Won Games
      </Heading>
    )
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })

  it('should render a reading with a line att the bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })
  it('should render a reading with a huge size', () => {
    renderWithTheme(<Heading size="huge">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })
  it('should render a reading with a small size', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })
  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
