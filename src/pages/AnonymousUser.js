import React from 'react'
import { UserForm, userFormActions } from '../components/UserForm'
import Context from '../Context'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'

export const AnonymousUser = () => {
  const [register, { loadingRegister, errorRegister }] = useRegisterMutation()
  const [login, { loadingLogin, errorLogin }] = useLoginMutation()
  return (
    <Context.Consumer>
      {({ isAuth, activateAuth }) => {
        return (
          <>
            <UserForm
              onSubmit={({ variables }) => {
                register({ variables }).then(({ data }) => {
                  const { signup } = data
                  activateAuth(signup)
                })
              }}
              action={userFormActions.REGISTER}
              error={errorRegister && errorRegister.message}
              disabled={loadingRegister}
            />
            <UserForm
              onSubmit={({ variables }) => {
                login({ variables }).then(({ data }) => {
                  const { login } = data
                  activateAuth(login)
                })
              }}
              action={userFormActions.LOGIN}
              error={errorLogin && errorLogin.message}
              disabled={loadingLogin}
            />
          </>
        )
      }}
    </Context.Consumer>
  )
}
