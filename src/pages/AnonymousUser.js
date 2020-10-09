import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm, userFormActions } from '../components/UserForm'

import { useLoginMutation } from '../hooks/useLoginMutation'
import { Layout } from '../components/Layout/index'

const AnonymousUser = () => {
  const { activateAuth } = useContext(Context)

  const [login, { loadingLogin, errorLogin }] = useLoginMutation()

  const onSubmitLogin = ({ variables }) => {
    login({ variables }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }

  return (
    <>
      <Layout title='Sing In' subtitle='Welcome to petgram'>
        <UserForm
          onSubmit={onSubmitLogin}
          action={userFormActions.LOGIN}
          error={errorLogin && errorLogin.message}
          disabled={loadingLogin}
        />
      </Layout>
    </>
  )
}

export default AnonymousUser
