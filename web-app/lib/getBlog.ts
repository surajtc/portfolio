import "server-only";
import { cache } from "react";
import { gql } from "graphql-request";
import { Blog } from "@/types";
import { query } from "./client";

export const getBlog = cache(async (slug: string) => {
  const QUERY = gql`
    query Blog($slug: String!) {
      blog(where: { slug: $slug }) {
        id
        slug
        title
        description
        date
        cover {
          url
        }
        content
      }
    }
  `;
  return await query.request<{ blog: Blog }>(QUERY, { slug });
});

export default getBlog;
