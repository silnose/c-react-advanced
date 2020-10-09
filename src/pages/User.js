import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import { Layout } from '../components/Layout'

const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <Layout title='Account' subtitle='Your petgram account'>
        <SubmitButton onClick={removeAuth}>Log Out</SubmitButton>
      </Layout>
    </>
  )
}
export default User
