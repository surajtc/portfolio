import "server-only";
import { gql } from "graphql-request";
import { Vote } from "@/types";
import { mutate } from "./client";

export default async function voteBlog(id: string, votes: number) {
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
}
