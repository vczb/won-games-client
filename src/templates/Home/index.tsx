import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Footer from 'components/Footer'

import * as S from './styles'
import Heading from 'components/Heading'

const Home = () => (
  <section>
    <Container>
      <Menu></Menu>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        News
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft color="white" lineColor="secondary">
        Most Popular
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft color="white" lineColor="secondary">
        Upcomming
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft color="white" lineColor="secondary">
        Free Games
      </Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
