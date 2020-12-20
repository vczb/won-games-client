import GameItem, { GameItemProps } from 'components/GameItem'
import * as S from './styles'

export type CardListProps = {
  items: GameItemProps[]
  total: string
}

const CardList = ({ items, total }: CardListProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <GameItem key={item.title} {...item} />
    ))}
    <S.Footer>
      Total <S.Total> {total}</S.Total>
    </S.Footer>
  </S.Wrapper>
)

export default CardList
