import { useMutation, gql } from '@apollo/client'

const LOGIN = gql`
mutation login ($input: UserCredentials!) {
    login (input: $input)
}
`
export const useLoginMutation = () => {
  const [loginMutation, loading] = useMutation(LOGIN)
  const loadingLogin = loading
  return { loginMutation, loadingLogin }
}
