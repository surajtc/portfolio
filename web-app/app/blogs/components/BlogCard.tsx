"use client";

import { BlogView, Vote } from "@/types";
import { Button, Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  blog: BlogView;
  children: ReactNode;
}

export default function BlogCard({ blog, children }: Props) {
  const router = useRouter();
  return (
    <Card className="group shadow-sm hover:shadow-lg transition-shadow [&>div]:p-0 [&>div]:gap-2 [&>div]:justify-between overflow-hidden">
      <Link href={`/blogs/${blog.slug}`} className="grow">
        <div className="relative overflow-hidden aspect-video w-full mx-auto border border-gray-200 dark:border-gray-700">
          <Image
            className="absolute object-cover"
            src={blog.cover.url}
            alt={blog.title}
            sizes="(max-width: 768px) 100vw"
            fill
          />
        </div>
        <div className="px-4">
          <h5 className="line-clamp-2 py-2 transition-colors group-hover:text-blue-700 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {blog.title}
          </h5>

          <div className="relative after:absolute after:inset-x-0 after:bottom-0 after:h-10 after:bg-gradient-to-t from-white dark:from-gray-800 text-md font-normal text-gray-700 dark:text-gray-400">
            <p className="pb-2 text-sm line-clamp-3">{blog.description}</p>
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-between pb-4 px-4">
        <Button
          outline={false}
          color="gray"
          className="border-none group-hover:text-blue-700"
          size="sm"
          onClick={() => router.push(`/blogs/${blog.slug}`)}
        >
          Read More
        </Button>
        {children}
      </div>
    </Card>
  );
}
