import { render, screen } from '@testing-library/react'

import Home from '.'

describe('<Home />', () => {
  it('should render the reading', () => {
    const { container } = render(<Home />)

    expect(screen.getByRole('heading', { name: /Home/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
