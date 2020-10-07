import React from 'react'
import { Logo } from './components/Logo'
import { GlobalStyles } from './styles/GlobalStyles'
import { NavBar } from './components/NavBar'
import { Routes } from './router/Routes'

export default function App() {
  return (
    <>
      <Logo />
      <GlobalStyles />
      <NavBar />
      <Routes />
    </>
  )
}
