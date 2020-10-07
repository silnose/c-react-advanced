import React from 'react'
import { Router } from '@reach/router'
import Context from '../Context'
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { Favs } from '../pages/Favs'
import { User } from '../pages/User'
import { AnonymousUser } from '../pages/AnonymousUser'

export const Routes = () => {
  return (
    <>
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Context.Consumer>
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
      </Context.Consumer>
    </>
  )
}
