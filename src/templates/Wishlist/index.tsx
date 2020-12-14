import Base from 'templates/Base'

import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import { Container } from 'components/Container'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  recommendedGames,
  recommendedHighlight,
  games
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading color="white" lineLeft lineColor="secondary">
        Wishlist
      </Heading>
      <Grid>
        {games?.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </Grid>

      <Divider />
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
