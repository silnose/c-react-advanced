import React from 'react'
import { UserForm } from '../components/UserForm'
import Context from '../Context'

export const AnonymousUser = () => (
  <Context.Consumer>
    {({ isAuth, activateAuth }) => {
      return <UserForm onSubmit={activateAuth} />
    }}
  </Context.Consumer>
)
