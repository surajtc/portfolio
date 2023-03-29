"use client";

import { BlogView } from "@/types";
import BlogCard from "./BlogCard";
import { useQuery } from "@tanstack/react-query";

interface Props {
  initial: BlogView[];
}

async function fetchBlogs() {
  const res = await fetch("/api/blogs");
  const { blogs }: { blogs: BlogView[] } = await res.json();
  return blogs;
}

export default function Blogs({ initial }: Props) {
  const { data, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    initialData: initial,
  });

  //   if (isLoading) {
  //     return <span>Loading...</span>;
  //   }

  if (isError) {
    return <span>Error</span>;
  }

  return (
    <div className="container mx-auto">
      <div className="grid gap-4 grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 p-6 sm:p-0">
        {data.map((i) => (
          <BlogCard key={i.slug} blog={i} />
        ))}
      </div>
    </div>
  );
}
