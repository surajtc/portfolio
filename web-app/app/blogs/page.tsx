import getBlogs from "@/lib/getBlogs";
import BlogCard from "./components/BlogCard";

// export const revalidate = 60;
export const dynamic = "force-dynamic";

export default async function BlogsPage() {
  const { blogs } = await getBlogs();

  if (!blogs) {
    return "loading...";
  }

  return (
    <div>
      <h2 className="text-3xl font-bold underline">Page</h2>
      <div className="container mx-auto">
        <div className="grid gap-4 grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 p-6 sm:p-0">
          {blogs.map((i) => (
            <BlogCard key={i.slug} blog={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
