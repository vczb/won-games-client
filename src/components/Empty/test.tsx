import { screen, render } from 'utils/testUtils'

import Empty from '.'

const props = {
  title: 'title',
  description: 'description'
}

describe('<Empty />', () => {
  it('should render correctrly', () => {
    const { container } = render(<Empty {...props} hasLink={true} />)

    expect(
      screen.getByRole('image', {
        name: /a gamer in a couch playing videogame/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()
    expect(screen.getByText(/description/)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /go back to store/i })
    ).toHaveAttribute('href', '/')

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should not render link when hasLink is not passed', () => {
    render(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /go back to store/i })
    ).not.toBeInTheDocument()
  })
})
