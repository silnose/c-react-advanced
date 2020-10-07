import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import singInImage from '../../images/corgi-dog.jpg'
import { Form, Input, Button, Small, Title, Error } from './styles'

export const userFormActions = {
  REGISTER: 'Register',
  LOGIN: 'Login'
}

export const UserForm = ({ onSubmit, action, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const title = action === userFormActions.LOGIN ? 'Sing In' : 'Register'

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      variables: { input: { email: email.value, password: password.value } }
    })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <img src={singInImage} alt='Sing In' width='150' />
        <Title>{title}</Title>
        <Input
          type='email'
          name='email'
          placeholder='Your Email'
          disabled={disabled}
          required
          {...email}
        />
        <Input
          type='password'
          name='password'
          placeholder='Your Password'
          disabled={disabled}
          required
          {...password}
        />
        <Button type='submit' disabled={disabled}>
          {action}
        </Button>
        {error && <Error>{error}</Error>}
        <Small display={action}>
          You don't have an account? <a href='#'>Register Here!</a>
        </Small>
      </Form>
    </>
  )
}
