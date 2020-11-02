import { gql, useQuery } from '@apollo/client'

export const useGetSinglePhoto = (id) => {
  const GET_SINGLE_PHOTO = gql`
    query getSinglePhoto($id: ID!) {
      photo(id: $id) {
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: { id: id }
  })

  return { loading, error, data }
}
