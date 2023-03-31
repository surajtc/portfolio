import "server-only";
import { cache } from "react";
import { gql } from "graphql-request";
import { Vote } from "@/types";
import { mutate } from "./client";

export const postVotes = cache(async (id: string, votes: number) => {
  const MUTATION = gql`
  mutation upvoteBlog($id: ID!) {
    updateBlog(where: { id: $id }, data: {votes: ${votes}}) {
      id
      votes
    }
  }
`;

  return mutate.request<{ updateBlog: Vote }>(MUTATION, {
    id,
  });
});

export default postVotes;
