import { screen } from '@testing-library/react'
import Banner from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: 'Defy death' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()
  })
})
