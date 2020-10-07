import { gql, useMutation } from '@apollo/client'

export const useRegisterMutation = () => {
  const REGISTER_USER = gql`
    mutation signup($input: UserCredentials!) {
      signup(input: $input)
    }
  `
  const [register, { data, loading, error }] = useMutation(REGISTER_USER)
  return [register, { loadingRegister: loading, errorRegister: error }]
}
