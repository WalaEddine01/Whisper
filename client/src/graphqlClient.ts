import { ApolloClient, InMemoryCache } from '@apollo/client';

import { RestLink } from 'apollo-link-rest';

export const restLink = new RestLink({ uri: 'http://localhost:5000/' });

export const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

