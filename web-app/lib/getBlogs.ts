import { Blogs } from "@/types";
import { gql } from "graphql-request";
import { client } from "./client";

const QUERY = gql`
  {
    blogs {
      content
      id
      likes
      slug
      title
      views
    }
  }
`;

export default async function getBlogs() {
  try {
    const { blogs } = await client.request<Blogs>(QUERY);
    return blogs;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
