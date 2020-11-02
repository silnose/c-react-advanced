import React from 'react'
import { Button } from './styles.js'
import { PropTypes } from 'prop-types'
export const SubmitButton = ({ children, disabled = false, onClick }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  )
}

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}
