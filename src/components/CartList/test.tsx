import { screen } from '@testing-library/react'

import mockItems from './mock'
import { renderWithTheme } from 'utils/tests/helpers'

import CartList from '.'

describe('<CartList />', () => {
  it('should render the card list correctly', () => {
    const { container } = renderWithTheme(
      <CartList items={mockItems} total="R$ 330,00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 330,00')).toHaveStyle({ color: '#F231A5' })

    expect(container.firstChild).toMatchSnapshot()
  })
})
