import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://montriwebservice.ecoachmanager.com/parent/graphql"
});

export default client