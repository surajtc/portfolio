import { Blog } from "@/types";
import { gql } from "graphql-request";
import { query } from "./client";

type Response = {
  blog: Blog;
};

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

export default async function getBlog(slug: string) {
  try {
    const { blog } = await query.request<Response>(QUERY, { slug });
    return blog;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
