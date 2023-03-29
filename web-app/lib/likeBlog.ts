import { Blog } from "@/types";
import { gql } from "graphql-request";
import { mutate } from "./client";

type Response = {
  blog: Blog;
};

export default async function likeBlog(slug: string, likes: number) {
  const MUTATION = gql`
  mutation likeBlog($slug: String!) {
    updateBlog(where: { slug: $slug }, data: {likes: ${likes + 1}}) {
      title
      slug
      id
      likes
      content
    }
  }
`;
  try {
    const { blog } = await mutate.request<Response>(MUTATION, { slug });
    return blog;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
