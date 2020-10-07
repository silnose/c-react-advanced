import { gql, useMutation } from '@apollo/client'

export const useLoginMutation = () => {
  const LOGIN = gql`
    mutation login($input: UserCredentials!) {
      login(input: $input)
    }
  `
  const [login, { data, loading, error }] = useMutation(LOGIN)
  return [login, { loadingLogin: loading, errorLoading: error }]
}
