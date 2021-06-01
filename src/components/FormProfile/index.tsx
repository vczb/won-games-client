import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ email, username }: FormProfileProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>
    <S.Form>
      <TextField
        name="username"
        placeholder="Username"
        label="Username"
        initialValue={username}
      />

      <TextField
        type="email"
        name="email"
        placeholder="E-mail"
        label="E-mail"
        initialValue={email}
        disabled
      />

      <TextField
        type="password"
        name="password"
        placeholder="Type your password"
        label="Password"
      />

      <TextField
        type="password"
        name="new-password"
        placeholder="New password"
        label="New Password"
      />
      <Button size="large">Save</Button>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
