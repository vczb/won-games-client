import OrdersList, { OrdersListProps } from 'components/OrdersList'
import Profile from 'templates/Profile'
import { GetServerSidePropsContext } from 'next'

import ordersMock from 'components/OrdersList/mock'
import protectedRoutes from 'utils/protectedRoutes'

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      items: ordersMock,
      session
    }
  }
}
