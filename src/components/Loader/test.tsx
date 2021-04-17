import { render, screen } from 'utils/testUtils'
import Loader from '.'

describe('<Loader />', () => {
  it('Should render correctly', () => {
    render(<Loader />)

    expect(screen.getByTitle(/loading/i)).toBeInTheDocument()
  })
})
