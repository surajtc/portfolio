import getBlogs from "@/lib/getBlogs";
import Blogs from "./components/Blogs";

export const revalidate = 3600;

export default async function BlogsPage() {
  const { blogs } = await getBlogs();

  if (!blogs) {
    return "loading...";
  }

  return (
    <div>
      <h2 className="text-3xl font-bold underline">Page</h2>
      <Blogs initial={blogs} />
    </div>
  );
}
