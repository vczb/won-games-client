import { render } from '@testing-library/react'

import PaymentOptions from '.'

describe('<PaymentOptions />', () => {
  it('should render the PaymentOptions', () => {
    const { container } = render(<PaymentOptions handlePlayment={() => ({})} />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
