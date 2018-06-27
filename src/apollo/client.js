import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { AsyncStorage } from 'react-native'
import { InMemoryCache } from 'apollo-cache-inmemory';
const httpLink = createHttpLink({ uri: 'http://192.168.1.21:3001/graphql' });
const cache = new InMemoryCache();
const authLink = setContext(async (_, { headers }) => {
  const data =  await AsyncStorage.getItem("@user")
  const userData = JSON.parse(data)
  return {
    headers: {
      ...headers,
      authorization: (userData.token) ? `Bearer ${userData.token}` : "",
    }
  }
});
// console.log(authLink)
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export default client