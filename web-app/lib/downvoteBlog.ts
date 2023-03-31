import "server-only";
import { gql } from "graphql-request";
import { Vote } from "@/types";
import { mutate } from "./client";

export default async function downvoteBlog(id: string, votes: number) {
  const MUTATION = gql`
  mutation downvoteBlog($id: ID!) {
    updateBlog(where: { id: $id }, data: {votes: ${votes - 1}}) {
      id
      votes
    }
  }
`;

  return mutate.request<{ updateBlog: Vote }>(MUTATION, {
    id,
  });
}
