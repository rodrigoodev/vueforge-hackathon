import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
const httpLink = createHttpLink({
  uri: "https://api.8base.com/cl5bir51u00lb09id1nfmfozv",
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
