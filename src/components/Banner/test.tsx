import { render, screen } from '@testing-library/react'

import Banner from '.'

describe('<Banner />', () => {
  it('should render the reading', () => {
    const { container } = render(<Banner />)

    expect(screen.getByRole('heading', { name: /Banner/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

})
