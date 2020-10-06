import React, { useState, useEffect } from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { Logo } from './components/Logo'
import { GlobalStyles } from './styles/GlobalStyles'

export default function App () {

  return (
    <>
      <Logo />
      <GlobalStyles />
      <ListOfCategories />
      <ListOfPhotoCard />
    </>
  )
}
