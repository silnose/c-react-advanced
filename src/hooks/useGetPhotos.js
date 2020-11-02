import { useQuery, gql } from '@apollo/client'
export const useGetPhotos = (categoryID) => {
  const GET_PHOTOS = gql`
    query getPhotos($categoryId: ID) {
      photos(categoryId: $categoryId) {
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `

  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId: categoryID }
  })

  return { loading, error, data }
}
