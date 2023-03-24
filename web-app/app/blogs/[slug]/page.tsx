import getBlog from "@/lib/getBlog";
import getBlogs from "@/lib/getBlogs";
import { Blog } from "@/types";
import { Metadata } from "next";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Params): Promise<Metadata> {
  const res: Promise<Blog | undefined> = getBlog(slug);
  const blog = await res;

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
  const res: Promise<Blog[] | undefined> = getBlogs();
  const blogs = await res;

  return (
    blogs!.map((i) => ({
      slug: i.slug.toString(),
    }))
  );
}

export default async function BlogPage({ params: { slug } }: Params) {
  const res: Promise<Blog | undefined> = getBlog(slug);
  const blog = await res;
  console.log("here", blog);
  return (
    <>
      <h2 className="text-3xl font-bold underline">Blog Details</h2>
      {blog && (
        <div>
          Blog: {blog.title}
          <p>{blog.id}</p>
        </div>
      )}
    </>
  );
}
