import React from 'react'
import PropTypes from 'prop-types'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCard } from '../components/ListOfPhotoCard'
import { Layout } from '../components/Layout'

const HomePage = ({ id }) => {
  console.log('Render: Home Page')
  return (
    <>
      <Layout title='Home' subtitle='Petgram the social network for your pets'>
        <ListOfCategories />
        <ListOfPhotoCard categoryID={id} />
      </Layout>
    </>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})

/*HomePage.propTypes = {
  id: PropTypes.string
}*/
