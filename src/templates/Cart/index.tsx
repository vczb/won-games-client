import Heading from 'components/Heading'
import { Container } from 'components/Container'
import Base from 'templates/Base'
import Showcase from 'components/Showcase'
import CardList from 'components/CardList'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { CardListProps } from 'components/CardList'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'

import * as S from './styles'
import Empty from 'components/Empty'

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CardListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards
}: CartProps) => {
  const handlePayment = () => ({})
  return (
    <Base>
      <Container>
        <Heading color="white" lineLeft lineColor="secondary">
          My Cart
        </Heading>
        {items.length ? (
          <S.Content>
            <CardList items={items} total={total} />
            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}
        <Divider />
      </Container>
      <Showcase
        title="You may like this games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart
