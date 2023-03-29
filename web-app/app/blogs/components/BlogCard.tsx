"use client";

import likeBlog from "@/lib/likeBlog";
import { Blog } from "@/types";
import { Badge, Button, Card } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiHeart, HiOutlineHeart, HiShare } from "react-icons/hi2";

interface Props {
  blog: Blog;
}

export default function BlogCard({ blog }: Props) {
  const [isLiked, setIsLiked] = useState(false);

  // useEffect(() => {
  //   if (isLiked) {
  //     likeBlog(blog.id, blog.likes);
  //   }
  // }, [isLiked, blog]);

  return (
    <Card
      imgAlt="text"
      imgSrc="/blog.avif"
      className="group shadow-sm hover:shadow-lg transition-shadow [&>div]:p-4 md:[&>div]:p-4 [&>div]:gap-2"
    >
      <h5 className="transition-colors group-hover:text-blue-700 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        {blog.title}
      </h5>
      <p className="relative after:absolute after:inset-x-0 after:bottom-0 after:h-16 after:bg-gradient-to-t from-white dark:from-gray-800 text-md font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <div className="flex items-center justify-between">
        <Button
          outline={false}
          color="gray"
          size="xs"
          className="border-none group-hover:text-blue-700"
        >
          Read More
        </Button>
        <Button.Group className="flex items-stretch">
          <Button
            color="gray"
            className="hover:text-red-700 disabled:hover:bg-white focus:ring-red-500 focus:text-red-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800"
            onClick={() => setIsLiked((prev) => !prev)}
          >
            {isLiked ? (
              <HiHeart className="mr-2 h-4 w-4 font-bold" size="xs" />
            ) : (
              <HiOutlineHeart className="mr-2 h-4 w-4 font-bold" size="xs" />
            )}
            {/* <p className="text-xs font-semibold text-gray-700 dark:text-gray-400"> */}
            <span className="text-xs">{blog.likes}</span>
            {/* </p> */}
          </Button>
          <Button color="gray" size="xs" style={{ height: "auto" }}>
            <HiShare className="h-4 w-4" />
          </Button>
        </Button.Group>
        {/* <div className="flex gap-2 items-center">
          <Badge size="lg" color="gray" icon={HiOutlineHeart}>
            323
          </Badge>
          <Badge size="lg" color="gray" icon={HiShare} />
        </div> */}
      </div>
    </Card>
  );
}
