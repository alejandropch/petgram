import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../container/RegisterMutation'
import { useLoginMutation } from '../container/LoginMutation'
import { Context } from '../context/Context'
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => {
  const { aproveAuth } = useContext(Context)
  const { registerMutation, loading } = useRegisterMutation()
  const { loginMutation, loadingLogin } = useLoginMutation()
  const navigate = useNavigate()
  const isLoading = loading.loading
  const isLoadingLogin = loadingLogin.loading

  const onSubmitSignUp = ({ email, password }) => {
    const input = { email, password }

    const variables = { input }
    registerMutation({ variables })
      .then(({ data }) => {
        const { signup } = data
        console.log(signup)
        navigate('/')

        aproveAuth(signup)
      })
  }

  const onSubmitSignIn = ({ email, password }) => {
    const input = { email, password }

    const variables = { input }
    loginMutation({ variables })
      .then(({ data }) => {
        const { login } = data
        navigate('/')

        aproveAuth(login)
      }
      )
  }
  return (
    <>
      <UserForm type='signup' error={loading.error} disabled={isLoading} onSubmit={onSubmitSignUp} title='Registrate' />
      <UserForm type='signin' error={loadingLogin.error} disabled={isLoadingLogin} onSubmit={onSubmitSignIn} title='Sign in' />
    </>
  )
}
