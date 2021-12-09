/* eslint-disable no-undef */
import React, { useRef } from 'react'
import { Form, Input, Title, Error, MessageContainer } from './styles'
import { Button } from '../SubmitButton'
export const UserForm = ({ type, error, disabled, onSubmit, title }) => {
  const form = useRef(null)
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    const formEntries = Object.fromEntries(formData)

    const { email, password } = formEntries
    onSubmit({ email, password })
  }
  let message = ''
  if (error) {
    ({ message } = error)
  }

  return (
    <>
      <Form ref={form} onSubmit={handleSubmit} disabled={disabled}>
        <Title>{title}</Title>

        <Input type='text' name='email' placeholder='Email' disabled={disabled} />
        <Input type='password' name='password' autocomplete={type === 'signin' ? 'current-password' : 'new-password'} placeholder='Password' disabled={disabled} />
        <Button disabled={disabled}>{title}</Button>

      </Form>
      <MessageContainer>

        <Error>{message}</Error>
      </MessageContainer>

    </>
  )
}
