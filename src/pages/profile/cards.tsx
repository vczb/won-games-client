import CardsList, { CardsListProps } from 'components/CardsList'
import Profile from 'templates/Profile'
import { GetServerSidePropsContext } from 'next'

import mockCards from 'components/PaymentOptions/mock'
import protectedRoutes from 'utils/protectedRoutes'

export default function Cards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      cards: mockCards,
      session
    }
  }
}
