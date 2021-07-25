import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { Session } from 'next-auth'
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
  session: Session
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps

const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`)

const Cart = ({
  session,
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
          <Elements stripe={stripe}>
            <PaymentForm session={session} />
          </Elements>
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
