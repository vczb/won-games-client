import { Story, Meta } from '@storybook/react/types-6-0'
import CardList, { CardListProps } from '.'

import mockItems from './mock'

export default {
  title: 'CardList',
  component: CardList,
  args: {
    items: mockItems,
    total: 'R$ 330,00'
  },
  argTypes: {
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

export const Default: Story<CardListProps> = (args) => (
  <div style={{ maxWidth: '80rem' }}>
    <CardList {...args} />
  </div>
)
