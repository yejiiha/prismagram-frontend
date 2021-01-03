import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { typeDefs, resolvers } from "./LocalState";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/",
});

const authLink = setContext(async (_, { headers }) => {
  const getToken = await localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: getToken ? `Bearer ${getToken}` : "",
    },
  };
});
const link = authLink.concat(httpLink);

export default new ApolloClient({
  cache: new InMemoryCache(),
  typeDefs,
  resolvers,
  link,
  connectToDevTools: true,
});
