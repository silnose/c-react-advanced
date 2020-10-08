import { useQuery, gql } from '@apollo/client'

export const useGetFavoritesQuery = () => {
  const GET_FAVORITES = gql`
    query getFavs {
      favs {
        id
        categoryId
        src
        likes
        userId
      }
    }
  `
  const { loading, error, data, refetch } = useQuery(GET_FAVORITES, {
    fetchPolicy: 'cache-and-network'
  })

  return { data, loading, error, refetch }
}
