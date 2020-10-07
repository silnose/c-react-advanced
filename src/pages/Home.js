import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCard } from '../components/ListOfPhotoCard'

export const Home = ({ id }) => (
  <>
    <ListOfCategories />
    <ListOfPhotoCard categoryID={id} />
  </>
)
