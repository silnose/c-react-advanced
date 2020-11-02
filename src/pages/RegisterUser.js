import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm, userFormActions } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { Layout } from '../components/Layout/index'

const RegisterUser = () => {
  const { activateAuth } = useContext(Context)
  const [register, { loadingRegister, errorRegister }] = useRegisterMutation()

  const onSubmitRegister = ({ variables }) => {
    register({ variables }).then(({ data }) => {
      const { signup } = data
      activateAuth(signup)
    })
  }

  return (
    <>
      <Layout title='Sing Up' subtitle='Welcome to petgram'>
        <UserForm
          onSubmit={onSubmitRegister}
          action={userFormActions.REGISTER}
          error={errorRegister && errorRegister.message}
          disabled={loadingRegister}
        />
      </Layout>
    </>
  )
}

export default RegisterUser
