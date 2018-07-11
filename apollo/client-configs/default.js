import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

export default () => {
  return {
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.map(({ message, locations, path }) => {
            return console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
          });
        }          
        if (networkError) console.log(`[Network error]: ${networkError}`);
      }),
      new HttpLink({ uri: 'http://localhost:3000/graphql' })
    ]),
    cache: new InMemoryCache(),
  }
}