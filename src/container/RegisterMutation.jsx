import { useMutation, gql } from '@apollo/client'

const REGISTER = gql`
mutation signup ($input: UserCredentials!) {
    signup (input: $input)
}
`
export const useRegisterMutation = () => {
  const [registerMutation, loading] = useMutation(REGISTER)

  return { registerMutation, loading }
}
