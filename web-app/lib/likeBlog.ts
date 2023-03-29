import { BlogView } from "@/types";
import { gql } from "graphql-request";
import { mutate } from "./client";

export default async function likeBlog(slug: string, likes: number) {
  const MUTATION = gql`
  mutation likeBlog($slug: String!) {
    updateBlog(where: { slug: $slug }, data: {likes: ${likes + 1}}) {
      slug
      title
      description
      likes
      cover {
        url
      }
    }
  }
`;

  // const { blog } = await mutate.request<{ blog: BlogView }>(MUTATION, {
  //   slug,
  // });
  return mutate.request<{ updateBlog: BlogView }>(MUTATION, {
    slug,
  });
}
