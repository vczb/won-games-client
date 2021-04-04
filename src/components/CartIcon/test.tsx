import { screen, render } from 'utils/testUtils'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    render(<CartIcon />)
    expect(screen.getByLabelText(/Shopping Cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/Cart Items/i)).not.toBeInTheDocument()
  })

  it('should render with badge', () => {
    render(<CartIcon quantity={3} />)
    expect(screen.getByLabelText(/Cart Items/i)).toBeInTheDocument()
    expect(screen.getByText(/3/)).toBeInTheDocument()
  })

  it('should render with badge only if has positive numbers', () => {
    render(<CartIcon quantity={-1} />)
    expect(screen.queryByLabelText(/Cart Items/i)).not.toBeInTheDocument()
    expect(screen.queryByLabelText(/-1/i)).not.toBeInTheDocument()
  })
})
