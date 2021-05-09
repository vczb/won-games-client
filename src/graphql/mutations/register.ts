import { gql } from '@apollo/client'

export const MUTATION_QUERY = gql`
  mutation MutationRegister($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
    }
  }
`
