import getBlogs from "@/lib/getBlogs";
import { Blog } from "@/types";
import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "./components/BlogCard";
// import Link from "next/link"

export const metadata: Metadata = {
  title: "Blogs",
};

export default async function BlogsPage() {
  const res: Promise<Blog[] | undefined> = getBlogs();
  const blogs = await res;

  return (
    blogs && (
      <div>
        <h2 className="text-3xl font-bold underline">Page</h2>
        <ul>
          {blogs.map((i) => (
            <li key={i.slug}>
              <Link href={`blogs/${i.slug}`}>{i.title}</Link>
            </li>
          ))}
        </ul>
        <div className="container mx-auto">
          <div className="grid gap-4 grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 p-6 sm:p-0">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    )
  );
}
