import React, { useContext } from 'react'
import { Context } from './Context'
import { Logo } from './components/Logo'
import { GlobalStyles } from './styles/GlobalStyles'
import { NavBar } from './components/NavBar'
import { Routes } from './router/Routes'

export default function App() {
  const { isAuth } = useContext(Context)
  return (
    <>
      <Logo />
      <GlobalStyles />
      <NavBar />
      <Routes {...isAuth} />
    </>
  )
}
