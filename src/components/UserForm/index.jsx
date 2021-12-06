/* eslint-disable no-undef */
import React, { useRef } from 'react'
import { Form, Input, Button, Title } from './styles'
export const UserForm = ({ error, loading, onSubmit, title }) => {
  const form = useRef(null)
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    const formEntries = Object.fromEntries(formData)

    const { email, password } = formEntries
    onSubmit({ email, password })
  }

  return (
    <>
      <Title>{title}</Title>
      <Form ref={form} onSubmit={handleSubmit}>

        <Input type='text' name='email' placeholder='Email' />
        <Input type='password' name='password' placeholder='Password' />
        <Button>{title}</Button>

      </Form>
      {loading}
      {error}
    </>
  )
}
