import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const FormProfile = () => (
  <S.Wrapper>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>
    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="John Cage"
      />

      <TextField
        type="email"
        name="email"
        placeholder="E-mail"
        label="E-mail"
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
