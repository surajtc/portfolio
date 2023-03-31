"use client";

import { BlogView, Vote } from "@/types";
import BlogCard from "./BlogCard";
import { useQuery } from "@tanstack/react-query";


interface Props {
  data: BlogView[];
}

export default function Blogs({ data }: Props) {
  async function fetchAllVotes() {
    const res = await fetch(`/api/blogs/votes`);
    const { blogs }: { blogs: Vote[] } = await res.json();
    return blogs;
  }

  const {
    data: allVotes,
    isLoading,
    isRefetching,
  } = useQuery({
    queryKey: ["votes"],
    queryFn: fetchAllVotes,
  });

  return allVotes ? (
    <div className="container mx-auto">
      <div className="grid gap-4 grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 p-6 sm:p-0">
        {data.map((item, index) => (
          <BlogCard key={item.id} blog={item} vote={allVotes[index]} />
        ))}
      </div>
    </div>
  ) : null;
}
