import React from 'react'
import ReactDOM from 'react-dom'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
  from
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

import Context from './Context'
import App from './App'

const httpLink = createHttpLink({
  uri: 'https://silnose-petgram-server-qjokcp6y2.vercel.app/graphql'
})

// the auth token is sent to the server on each request due to this middleware
const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }))

  return forward(operation)
})

const errorMiddleware = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  }

  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.location.href = '/users'
  } else {
    console.log(`[Network error]: ${networkError}`)
  }
})

const client = new ApolloClient({
  link: from([authMiddleware, errorMiddleware, httpLink]),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
