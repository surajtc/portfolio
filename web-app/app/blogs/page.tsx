import getBlogs from "@/lib/getBlogs";
import { Blog } from "@/types";
import type { Metadata } from "next";
import Link from "next/link";
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
        <h2 className="text-3xl font-bold underline">Blog Page</h2>
        <ul>
          {blogs.map((i) => (
            <li key={i.slug}>
              <Link href={`blogs/${i.slug}`}>{i.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
