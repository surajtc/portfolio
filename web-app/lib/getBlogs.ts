import { BlogView } from "@/types";
import { gql } from "graphql-request";
import { query } from "./client";

export default async function getBlogs() {
  const QUERY = gql`
    query getBlogs {
      blogs {
        id
        slug
        title
        description
        cover {
          url
        }
      }
    }
  `;

  return query.request<{ blogs: BlogView[] }>(QUERY);
}
