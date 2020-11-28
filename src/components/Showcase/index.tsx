import * as S from './styles'
import Heading from 'components/Heading'
import GameCardSlider from 'components/GameCardSlider'
import Highlight, { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
}

const Showcase = ({ games, highlight, title }: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft color="white" lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} />}
  </S.Wrapper>
)

export default Showcase
