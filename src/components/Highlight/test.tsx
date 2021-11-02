import { screen, render } from 'utils/testUtils'

import Highlight from '.'
import * as S from './styles'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy Now',
  buttonLink: '/rdr2',
  backgroundImage: '/img/red-dead-img.jpg'
}

describe('<Highlight />', () => {
  it('should render readings and button', () => {
    render(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('it sould render float image', () => {
    render(<Highlight {...props} floatImage="/float-image-png" />)

    const img = screen.getByTestId('float-image-wrapper').firstChild

    expect(img).toHaveAttribute(
      'src',
      '/float-image-png'
    )
  })

  it('it sould render align right by default', () => {
    const { container } = render(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('it sould render align left', () => {
    const { container } = render(<Highlight {...props} alignment="left" />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })
})
