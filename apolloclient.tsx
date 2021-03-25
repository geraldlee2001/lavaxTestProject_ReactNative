import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
    uri: 'https://api.graphql.jobs/',
    cache: new InMemoryCache()
});
  
const apolloProvider = ()=> {
    
}

export default apolloProvider