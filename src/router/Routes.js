import React from 'react'
import { Redirect, Router } from '@reach/router'
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { Favs } from '../pages/Favs'
import { User } from '../pages/User'
import { AnonymousUser } from '../pages/AnonymousUser'
import { NotFound } from '../pages/NotFound'

export const Routes = ({ isAuth }) => {
  return (
    <>
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <AnonymousUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favorites' to='/login' />}
        {!isAuth && <Redirect noThrow from='/account' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favorites' />
        <User path='/account' />
      </Router>
    </>
  )
}
