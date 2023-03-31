import "server-only";
import { cache } from "react";
import { BlogView } from "@/types";
import { gql } from "graphql-request";
import { query } from "./client";

export const getBlogs = cache(async () => {
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
});
