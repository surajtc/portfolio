import { Vote } from "@/types";
import { gql } from "graphql-request";
import { query } from "./client";

export default async function getAllVotes() {
  const QUERY = gql`
    query getAllVotes {
      blogs {
        id
        votes
      }
    }
  `;

  return query.request<{ blogs: Vote[] }>(QUERY);
}
