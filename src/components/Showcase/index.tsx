import * as S from './styles'
import Heading from 'components/Heading'
import GameCardSlider from 'components/GameCardSlider'
import Highlight, { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  arrow?: 'white' | 'black'
}

const Showcase = ({
  games,
  highlight,
  title,
  arrow = 'white'
}: ShowcaseProps) => (
  <S.Wrapper data-cy={title || 'showcase'} >
    {!!title && (
      <Heading lineLeft color="white" lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider color={arrow} items={games} />}
  </S.Wrapper>
)

export default Showcase
