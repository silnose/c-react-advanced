import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm, userFormActions } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'

export const AnonymousUser = () => {
  const { activateAuth } = useContext(Context)
  const [register, { loadingRegister, errorRegister }] = useRegisterMutation()
  const [login, { loadingLogin, errorLogin }] = useLoginMutation()
  const onSubmitRegister = ({ variables }) => {
    register({ variables }).then(({ data }) => {
      const { signup } = data
      activateAuth(signup)
    })
  }
  const onSubmitLogin = ({ variables }) => {
    login({ variables }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }

  return (
    <>
      <UserForm
        onSubmit={onSubmitRegister}
        action={userFormActions.REGISTER}
        error={errorRegister && errorRegister.message}
        disabled={loadingRegister}
      />
      <UserForm
        onSubmit={onSubmitLogin}
        action={userFormActions.LOGIN}
        error={errorLogin && errorLogin.message}
        disabled={loadingLogin}
      />
    </>
  )
}
