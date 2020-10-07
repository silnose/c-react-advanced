import { gql, useMutation } from '@apollo/client'

export const useLikePhoto = () => {
  const LIKE_PHOTO = gql`
    mutation likeAnonymousPhoto($input: LikePhoto!) {
      likeAnonymousPhoto(input: $input) {
        id
        liked
        likes
      }
    }
  `
  const [toggleLike] = useMutation(LIKE_PHOTO)
  return [toggleLike]
}
