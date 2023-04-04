import { Metadata } from "next";
import getBlog from "@/lib/getBlog";
import { getBlogs } from "@/lib/getBlogs";
import Markdown from "./components/Markdown";
import Image from "next/image";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Params): Promise<Metadata> {
  const { blog } = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: `${blog.title}`,
  };
}

export async function generateStaticParams() {
  const { blogs } = await getBlogs();

  return blogs!.map((i) => ({
    slug: i.slug.toString(),
  }));
}

export default async function BlogPage({ params: { slug } }: Params) {
  const { blog } = await getBlog(slug);

  if (!blog) {
    return "loading...";
  }

  return (
    <>
      <h2 className="text-2xl py-2 font-bold tracking-tight">{blog.title}</h2>
      <p className="text-lg pb-6 font-normal leading-relaxed tracking-tight text-gray-700 dark:text-gray-400">
        {blog.description}
      </p>
      <div className="relative overflow-hidden aspect-video rounded-lg w-full mx-auto">
        <Image
          className="absolute object-cover rounded-lg"
          src={blog.cover.url}
          alt={blog.title}
          sizes="(max-width: 768px) 100vw"
          fill
        />
      </div>
      <article className="prose lg:prose-xl prose-slate dark:prose-invert prose-pre:bg-[#282c34] min-w-full">
        <Markdown content={blog.content} />
      </article>
    </>
  );
}
