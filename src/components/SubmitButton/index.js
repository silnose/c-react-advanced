import React from 'react'
import { Button } from './styles.js'
export const SubmitButton = ({ children, disabled = false, onClick }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  )
}
