import React from 'react'
import { Context } from '../context/Context'
import { App as AppComponent } from '../App'
import { useAuth } from '../hooks/useAuth'
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, from, HttpLink } from '@apollo/client'

import { onError } from '@apollo/client/link/error'

const autorizeUser = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }
  return forward(operation)
})

const errorOnMiddle = onError(
  ({ networkError }) => {
    if (networkError && networkError.result.code === 'invalid_token') {
      console.log('session expired')
      window.sessionStorage.removeItem('token')
      window.location = '/profile'
    }
  }

)

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    autorizeUser,
    errorOnMiddle,
    new HttpLink({ uri: 'https://api-alejandropch.vercel.app/graphql' })
  ])

})
export const App = () => {
  const Auth = useAuth()

  return (

    <ApolloProvider client={client}>
      <Context.Provider value={Auth}>
        <AppComponent />
      </Context.Provider>
    </ApolloProvider>
  )
}
