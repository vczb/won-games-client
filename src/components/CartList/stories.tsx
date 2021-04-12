import { Story, Meta } from '@storybook/react/types-6-0'
import CartList, { CartListProps } from '.'

import items from './mock'

export default {
  title: 'CartList',
  component: CartList,
  argTypes: {
    cartContextValue: {
      type: ''
    },
    items: {
      type: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '80rem' }}>
    <CartList {...args} />
  </div>
)
Default.args = {
  cartContextValues: { items },
  total: 'R$ 330,00'
}

export const withButton: Story = (args) => (
  <div style={{ maxWidth: '80rem' }}>
    <CartList {...args} hasButton />
  </div>
)
withButton.args = {
  cartContextValues: { items },
  total: 'R$ 330,00'
}

export const Empty: Story<CartListProps> = () => (
  <div style={{ maxWidth: '80rem' }}>
    <CartList />
  </div>
)
