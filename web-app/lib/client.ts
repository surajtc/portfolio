import { GraphQLClient } from "graphql-request";

const URL =
  "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clfmmtwlg09b401td18164kmk/master";

export const client = new GraphQLClient(URL, {
  headers: {
    Authorization: `Bearer ${process.env.API_AUTH_TOKEN}`,
  },
});
