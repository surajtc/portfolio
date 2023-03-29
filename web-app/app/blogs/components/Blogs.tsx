"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { BlogView } from "@/types";
import BlogCard from "./BlogCard";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";

const query = new QueryClient();

async function fetchBlogs() {
  const res = await fetch("/api/blogs");
  const { blogs }: { blogs: BlogView[] } = await res.json();
  return blogs;
}

function Temp() {
  const { data, isLoading, isError } = useQuery("blogs", fetchBlogs);
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }
  return (
    <div className="container mx-auto">
      <div className="grid gap-4 grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 p-6 sm:p-0">
        {data && data.map((i) => <BlogCard key={i.slug} blog={i} />)}
      </div>
    </div>
  );
}

export default function Blogs({ text }: { text: string }) {
  const [g, setG] = useState(text);
  useEffect(() => {
    setG("Hello form CLient");
  }, []);

  return (
    <QueryClientProvider client={query}>
      <h2>{g}</h2>
      <Temp />
    </QueryClientProvider>
  );
}
