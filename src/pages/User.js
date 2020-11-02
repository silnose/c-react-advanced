import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import { Layout } from '../components/Layout'
import { EmptyPage } from '../components/EmptyPage/index'

const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <Layout title='Account' subtitle='Your petgram account'>
        <EmptyPage text='Hey you!' />
        <SubmitButton onClick={removeAuth}>Log Out</SubmitButton>
      </Layout>
    </>
  )
}
export default User
