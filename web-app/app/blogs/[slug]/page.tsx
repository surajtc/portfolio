import { Metadata } from "next";
import getBlog from "@/lib/getBlog";
import { getBlogs } from "@/lib/getBlogs";
import Markdown from "./components/Markdown";

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
      <h2 className="text-3xl font-bold underline">Blog Details</h2>
      <div>
        Blog: {blog.title}
        <p>{blog.id}</p>
      </div>
      <article className="prose lg:prose-xl">
        <Markdown content={blog.content} />
      </article>
    </>
  );
}
