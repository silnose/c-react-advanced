import React, { useState } from 'react'

export const UserForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          placeholder='Email'
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Log In</button>
      </form>
    </>
  )
}
