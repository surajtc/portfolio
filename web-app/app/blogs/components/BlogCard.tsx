"use client";

import { BlogView, Vote } from "@/types";
import { Button, Card } from "flowbite-react";
import { HiShare } from "react-icons/hi2";
import Link from "next/link";
import VoteButton from "./VoteButton";

interface Props {
  blog: BlogView;
  vote: Vote;
}

export default function BlogCard({ blog, vote }: Props) {
  return (
    <Card
      imgAlt={blog.title}
      imgSrc={blog.cover.url}
      className="group shadow-sm hover:shadow-lg transition-shadow [&>div]:p-4 md:[&>div]:p-4 [&>div]:gap-2"
    >
      <Link href={`/blogs/${blog.slug}`}>
        <div>
          <h5 className="transition-colors group-hover:text-blue-700 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {blog.title}
          </h5>

          <p className="relative after:absolute after:inset-x-0 after:bottom-0 after:h-16 after:bg-gradient-to-t from-white dark:from-gray-800 text-md font-normal text-gray-700 dark:text-gray-400">
            {blog.description}
          </p>
        </div>
      </Link>
      <div className="flex items-center justify-between">
        <Button
          outline={false}
          color="gray"
          className="border-none group-hover:text-blue-700"
        >
          Read More
        </Button>
        <Button.Group className="flex items-stretch">
          <VoteButton id={blog.id} vote={vote} />
          <Button color="gray" size="xs" style={{ height: "auto" }}>
            <HiShare className="h-4 w-4" />
          </Button>
        </Button.Group>
      </div>
    </Card>
  );
}
