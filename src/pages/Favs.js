import React from 'react'
import { ListOfFavorites } from '../components/ListOfFavorites'
import { Layout } from '../components/Layout'

const Favs = () => (
  <>
    <Layout title='Favorites' subtitle='Yout favorites pets'>
      <ListOfFavorites />
    </Layout>
  </>
)
export default Favs
