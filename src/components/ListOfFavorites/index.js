import React from 'react'
import { useGetFavoritesQuery } from '../../hooks/useGetFavoritesQuery'
import { Link, Image, Container } from './styles'

export const ListOfFavorites = () => {
  const { data, loading, error, refetch } = useGetFavoritesQuery()

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error.message}</h1>
  }

  return (
    <>
      <Container>
        {data.favs.map((fav) => (
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            <Image src={fav.src} alt='' />
          </Link>
        ))}
      </Container>
    </>
  )
}
