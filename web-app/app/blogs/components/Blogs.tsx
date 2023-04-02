"use client";

import { BlogView, Vote } from "@/types";
import BlogCard from "./BlogCard";
import { useQuery } from "@tanstack/react-query";
import VoteButton from "./VoteButton";

interface Props {
  data: BlogView[];
}

async function fetchAllVotes() {
  const res = await fetch(`/api/blogs/votes`);
  const { blogs }: { blogs: Vote[] } = await res.json();
  return blogs;
}

export default function Blogs({ data }: Props) {
  const { data: allVotes, isInitialLoading } = useQuery({
    queryKey: ["votes"],
    queryFn: fetchAllVotes,
  });

  return (
    <div className="container mx-auto">
      <div className="grid gap-4 grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 p-6 sm:p-0 masonry">
        {data.map((item, index) => (
          <BlogCard key={item.id} blog={item}>
            <VoteButton
              id={item.id}
              initial={allVotes ? allVotes[index] : undefined}
              loading={isInitialLoading}
            />
          </BlogCard>
        ))}
      </div>
    </div>
  );
}
