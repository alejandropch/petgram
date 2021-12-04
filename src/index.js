import React from 'react'
import ReactDom from 'react-dom'
import { App } from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api-alejandropch.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDom.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('app'))
