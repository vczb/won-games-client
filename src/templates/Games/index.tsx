import { useRouter } from 'next/router'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'
import { useQueryGames } from 'graphql/queries/games'
import { ParsedUrlQueryInput } from 'querystring'
import Base from 'templates/Base'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'
import * as S from './styles'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter()

  const { data, fetchMore } = useQueryGames({
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items
    })
    return
  }
  const handleShowMore = () => {
    fetchMore({
      variables: { limit: 15, start: data?.games.length }
    })
  }
  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />
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
