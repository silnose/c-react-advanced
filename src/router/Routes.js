import React, { Suspense } from 'react'
import { Redirect, Router } from '@reach/router'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Loading } from '../components/Loading'
const Favs = React.lazy(() => import('../pages/Favs'))
const User = React.lazy(() => import('../pages/User'))
const AnonymousUser = React.lazy(() => import('../pages/AnonymousUser'))
const RegisterUser = React.lazy(() => import('../pages/RegisterUser'))
const Detail = React.lazy(() => import('../pages/Detail'))

export const Routes = ({ isAuth }) => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Router>
          <NotFound default />
          <Home path='/' />
          <Home path='/pet/:id' />
          <Detail path='/detail/:detailId' />
          {!isAuth && <RegisterUser path='/register' />}
          {!isAuth && <AnonymousUser path='/login' />}
          {!isAuth && <Redirect noThrow from='/favorites' to='/login' />}
          {!isAuth && <Redirect noThrow from='/account' to='/login' />}
          {isAuth && <Redirect noThrow from='/login' to='/' />}
          <Favs path='/favorites' />
          <User path='/account' />
        </Router>
      </Suspense>
    </>
  )
}
