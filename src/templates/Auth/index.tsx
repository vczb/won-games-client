import * as S from './styles'
import Logo from 'components/Logo'
import Heading from 'components/Heading'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Logo />
      <Heading color="white">All you favorite games in one place</Heading>
      <S.Subtitle>
        <strong>WON</strong> is the best and most complete gaming platform.
      </S.Subtitle>
      <S.Footer>Won Games 2020 Todos os Direitos Reservados</S.Footer>
    </S.BannerBlock>
    <S.Content>
      <Logo color="black" size="normal" />
      <Heading lineColor="secondary" lineLeft>
        {title}
      </Heading>

      {children}
    </S.Content>
  </S.Wrapper>
)

export default Auth
