"use client";

import { BlogView, Vote } from "@/types";
import { Button, Card } from "flowbite-react";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  blog: BlogView;
  children: ReactNode;
}

export default function BlogCard({ blog, children }: Props) {
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
        {children}
      </div>
    </Card>
  );
}
