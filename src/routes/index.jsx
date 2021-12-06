import React from 'react'
import { Context } from '../context/Context'
import { App as AppComponent } from '../App'
import { useRegister } from '../hooks/useRegister'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api-alejandropch.vercel.app/graphql',
  cache: new InMemoryCache()
})
export const App = () => {
  const Register = useRegister()

  return (

    <Context.Provider value={Register}>
      <ApolloProvider client={client}>
        <AppComponent />
      </ApolloProvider>
    </Context.Provider>
  )
}
