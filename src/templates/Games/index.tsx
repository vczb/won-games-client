import { useQuery } from '@apollo/client'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES } from 'graphql/queries/games'
import Base from 'templates/Base'
import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data } = useQuery<QueryGames, QueryGamesVariables>(QUERY_GAMES, {
    variables: { limit: 15 }
  })

  const handleFilter = () => {
    return
  }
  const handleShowMore = () => {
    return
  }
  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />
        <section>
          <Grid>
            {data?.games.map((game) => (
              <GameCard
                key={game.slug}
                title={game.name}
                slug={game.slug}
                developer={game.developers[0].name}
                img={`http://localhost:1337${game.cover!.url}`}
                price={game.price}
              />
            ))}
          </Grid>
          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
