import Heading from 'components/Heading'
import { Container } from 'components/Container'
import Base from 'templates/Base'
import Showcase from 'components/Showcase'
import CartList from 'components/CartList'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { CartListProps } from 'components/CartList'
import PaymentForm from 'components/PaymentForm'

import * as S from './styles'

export type CartProps = {
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps

const Cart = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: CartProps) => {
  return (
    <Base>
      <Container>
        <Heading color="white" lineLeft lineColor="secondary">
          My Cart
        </Heading>
        <S.Content>
          <CartList />
          <PaymentForm />
        </S.Content>

        <Divider />
      </Container>
      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart
