import React from 'react'
import { Context } from '../context/Context'
import { App as AppComponent } from '../App'
import { useAuth } from '../hooks/useAuth'
import {
  ApolloClient, ApolloProvider, InMemoryCache, createHttpLink,
  from
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'https://api-alejandropch.vercel.app/graphql'
})
const autorizeUser = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
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
  link: from([autorizeUser.concat(httpLink),
    errorOnMiddle])

})
export const App = () => {
  const Auth = useAuth()

  return (

    <Context.Provider value={Auth}>
      <ApolloProvider client={client}>
        <AppComponent />
      </ApolloProvider>
    </Context.Provider>
  )
}
