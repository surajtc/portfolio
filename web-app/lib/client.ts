import { GraphQLClient } from "graphql-request";

export const query = new GraphQLClient(`${process.env.URL_QUERY}`, {
  headers: {
    authorization: `bearer ${process.env.AUTH_TOKEN_QUERY}`,
  },
});

export const mutate = new GraphQLClient(`${process.env.URL_MUTATE}`, {
  headers: {
    authorization: `bearer ${process.env.AUTH_TOKEN_MUTATE}`,
  },
});
