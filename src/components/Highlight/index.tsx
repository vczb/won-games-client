import * as S from './styles'
import Button from 'components/Button'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImage?: string
  alignment?: 'right' | 'left'
}

const Highlight = ({
  alignment = 'right',
  floatImage,
  backgroundImage,
  buttonLabel,
  buttonLink,
  title,
  subtitle
}: HighlightProps) => (
  <S.Wrapper alignment={alignment} backgroundImage={backgroundImage}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title}></S.FloatImage>}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
