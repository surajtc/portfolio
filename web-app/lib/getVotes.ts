import { Vote } from "@/types";
import { gql } from "graphql-request";
import { query } from "./client";

export default async function getVotes(id: string) {
  const QUERY = gql`
    query Blog($id: ID!) {
      blog(where: { id: $id }) {
        id
        votes
      }
    }
  `;
  return await query.request<{ blog: Vote }>(QUERY, { id });
}
