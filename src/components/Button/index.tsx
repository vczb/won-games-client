import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
}

const Button = ({
  children,
  size = 'medium',
  fullWidth = false
}: ButtonProps) => (
  <S.Wrapper fullWidth={fullWidth} size={size}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
