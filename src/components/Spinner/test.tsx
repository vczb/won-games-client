import { render, screen } from 'utils/testUtils'
import Spinner from '.'

describe('<Spinner />', () => {
  it('Should render correctly', () => {
    render(<Spinner />)

    expect(screen.getByTitle(/loading/i)).toBeInTheDocument()
  })
})
