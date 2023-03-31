import "server-only";
import { cache } from "react";
import { gql } from "graphql-request";
import { Vote } from "@/types";
import { query } from "./client";

export const getVotes = cache(async (id: string) => {
  const QUERY = gql`
    query Blog($id: ID!) {
      blog(where: { id: $id }) {
        id
        votes
      }
    }
  `;
  return await query.request<{ blog: Vote }>(QUERY, { id });
});

export default getVotes;
