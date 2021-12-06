import React, { useContext } from 'react'
import { useRegisterMutation } from '../container/RegisterMutation'
import { Context } from '../context/Context'
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => {
  const { aproveAuth } = useContext(Context)
  const { registerMutation, loading } = useRegisterMutation()
  const msgError = loading.error && 'Something terrible has happened'
  const msgLoading = loading.loading && 'Loading dude'

  const onSubmit = ({ email, password }) => {
    const input = { email, password }

    const variables = { input }
    registerMutation({ variables })
      .then(aproveAuth)
  }
  return (
    <>
      <UserForm error={msgError} loading={msgLoading} onSubmit={onSubmit} title='Registrate' />
      <UserForm aproveAuth={aproveAuth} title='Sign in' />
    </>
  )
}
