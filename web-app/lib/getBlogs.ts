import "server-only";
import { cache } from "react";
import { gql } from "graphql-request";
import { BlogView } from "@/types";
import { query } from "./client";

export const getBlogs = cache(async () => {
  const QUERY = gql`
    query getBlogs {
      blogs {
        id
        slug
        title
        description
        date
        cover {
          url
        }
      }
    }
  `;

  return query.request<{ blogs: BlogView[] }>(QUERY);
});

export default getBlogs;
