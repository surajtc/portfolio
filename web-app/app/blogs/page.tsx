// "use client";

import getBlogs from "@/lib/getBlogs";
import { Blog } from "@/types";
import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "./components/BlogCard";
import likeBlog from "@/lib/likeBlog";
// import Link from "next/link"

// export const metadata: Metadata = {
//   title: "Blogs",
// };

export default async function BlogsPage() {
  const { blogs } = await getBlogs();

  if (!blogs) {
    return "loading...";
  }

  return (
    <div>
      <h2 className="text-3xl font-bold underline">Page</h2>
      <div className="container mx-auto">
        <div className="grid gap-4 grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 p-6 sm:p-0">
          {blogs.map((i) => (
            <BlogCard key={i.slug} blog={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
