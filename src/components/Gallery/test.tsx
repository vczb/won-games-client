import 'match-media-mock'
import { screen, fireEvent } from '@testing-library/react'
import { render } from 'utils/testUtils'
import Gallery from '.'

import mockItems from './mock'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    render(<Gallery items={mockItems.slice(0.2)} />)

    expect(
      screen.getByRole('button', { name: /thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', mockItems[0].src)

    expect(
      screen.getByRole('button', { name: /thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', mockItems[1].src)
  })

  it('should open modal', async () => {
    render(<Gallery items={mockItems.slice(0.2)} />)

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - Gallery Image 2/i })
    )

    const img = await screen.findByRole('img', { name: /Gallery Image 2/i })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })

  it('should open modal with selected image', () => {
    render(<Gallery items={mockItems.slice(0.2)} />)

    const modal = screen.getByLabelText('modal')

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - Gallery Image 1/i })
    )
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should handle close modal when overlay or button click', () => {
    render(<Gallery items={mockItems.slice(0.2)} />)

    const modal = screen.getByLabelText('modal')

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - Gallery Image 1/i })
    )

    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal when ESC button is pressed', () => {
    const { container } = render(<Gallery items={mockItems.slice(0.2)} />)

    const modal = screen.getByLabelText('modal')

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - Gallery Image 1/i })
    )

    fireEvent.keyUp(container, { key: 'Escape' })

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })
})
