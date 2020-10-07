import React from 'react'
import { Router } from '@reach/router'
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { Favs } from '../pages/Favs'
import { User } from '../pages/User'
import { AnonymousUser } from '../pages/AnonymousUser'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

export const Routes = () => {
  return (
    <>
      {' '}
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <UserLogged>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path='/favorites' />
              <User path='/account' />
            </Router>
          ) : (
            <Router>
              <AnonymousUser path='/favorites' />
              <AnonymousUser path='/account' />
            </Router>
          )
        }
      </UserLogged>
      )
    </>
  )
}
