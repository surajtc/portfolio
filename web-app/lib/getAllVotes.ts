import "server-only";
import { cache } from "react";
import { gql } from "graphql-request";
import { Vote } from "@/types";
import { query } from "./client";

export const getAllVotes = cache(async () => {
  const QUERY = gql`
    query getAllVotes {
      blogs {
        id
        votes
      }
    }
  `;

  return query.request<{ blogs: Vote[] }>(QUERY);
});

export default getAllVotes;
