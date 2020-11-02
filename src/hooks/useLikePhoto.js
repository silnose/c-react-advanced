import { gql, useMutation } from '@apollo/client'

export const useLikePhotoAnonymous = () => {
  const LIKE_PHOTO = gql`
    mutation likeAnonymousPhoto($input: LikePhoto!) {
      likeAnonymousPhoto(input: $input) {
        id
        liked
        likes
      }
    }
  `
  const [toggleLikeAnonymous] = useMutation(LIKE_PHOTO)
  return [toggleLikeAnonymous]
}

export const useLikePhoto = () => {
  const LIKE_PHOTO = gql`
    mutation likePhoto($input: LikePhoto!) {
      likePhoto(input: $input) {
        id
        liked
        likes
      }
    }
  `
  const [toggleLike] = useMutation(LIKE_PHOTO)

  return [toggleLike]
}
