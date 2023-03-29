"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { BlogView } from "@/types";
import { Button, Card } from "flowbite-react";
import { HiHeart, HiOutlineHeart, HiShare } from "react-icons/hi2";
import Link from "next/link";

interface Props {
  blog: BlogView;
}

export default function BlogCard({ blog }: Props) {
  const [data, setData] = useState(blog);
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(blog.likes);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  const isMutating = isFetching || isPending;

  async function handleChange() {
    setIsLiked(true);
    setCount((p) => p + 1);
    setIsFetching(true);
    // Mutate external data source
    const res = await fetch(`/api/blogs/${data.slug}/like`, {
      method: "POST",
      body: JSON.stringify({ likes: data.likes }),
    });
    const temp: BlogView = await res.json();
    setData(temp);
    setIsFetching(false);

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  }

  useEffect(() => {
    setCount(data.likes);
  }, [data]);

  return (
    <Card
      imgAlt={data.title}
      imgSrc={data.cover.url}
      className="group shadow-sm hover:shadow-lg transition-shadow [&>div]:p-4 md:[&>div]:p-4 [&>div]:gap-2"
    >
      <Link href={`/blogs/${data.slug}`}>
        <div>
          <h5 className="transition-colors group-hover:text-blue-700 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {data.title}
          </h5>

          <p className="relative after:absolute after:inset-x-0 after:bottom-0 after:h-16 after:bg-gradient-to-t from-white dark:from-gray-800 text-md font-normal text-gray-700 dark:text-gray-400">
            {data.description}
          </p>
        </div>
      </Link>
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
            onClick={handleChange}
          >
            {isLiked ? (
              <HiHeart className="mr-2 h-4 w-4 font-bold" size="xs" />
            ) : (
              <HiOutlineHeart className="mr-2 h-4 w-4 font-bold" size="xs" />
            )}
            <span className="text-sm">{count}</span>
          </Button>
          <Button color="gray" size="xs" style={{ height: "auto" }}>
            <HiShare className="h-4 w-4" />
          </Button>
        </Button.Group>
      </div>
    </Card>
  );
}
