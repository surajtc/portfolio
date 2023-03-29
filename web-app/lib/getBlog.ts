import { Blog } from "@/types";
import { gql } from "graphql-request";
import { query } from "./client";

export default async function getBlog(slug: string) {
  const QUERY = gql`
    query Blog($slug: String!) {
      blog(where: { slug: $slug }) {
        title
        slug
        id
        likes
        content
      }
    }
  `;
  return await query.request<{ blog: Blog }>(QUERY, { slug });
}
