import React from 'react'
import { Button as ButtonStyled } from './styles'

export const Button = ({ children, disabled, onClick }) => {
  return <ButtonStyled disabled={disabled} onClick={onClick}>{children}</ButtonStyled>
}
