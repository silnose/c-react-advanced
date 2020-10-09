import React from 'react'
import { useGetFavoritesQuery } from '../../hooks/useGetFavoritesQuery'
import { Link, Image, Container, NoFavorites } from './styles'
import { PropTypes } from 'prop-types'
import { Loading } from '../Loading'
import { EmptyPage } from '../EmptyPage'

export const ListOfFavorites = () => {
  const { data, loading, error, refetch } = useGetFavoritesQuery()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <h1>{error.message}</h1>
  }
  console.log(data.favs)
  if (!Array.isArray(data.favs) || data.favs.length === 0) {
    return <EmptyPage text='Nothing Here....' />
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

ListOfFavorites.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, src: PropTypes.string })
  )
}
