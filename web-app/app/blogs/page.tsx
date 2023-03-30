import getBlogs from "@/lib/getBlogs";
import Blogs from "./components/Blogs";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function BlogsPage() {
  const { blogs } = await getBlogs();

  if (!blogs) {
    return "loading...";
  }

  return (
    <div>
      <h2 className="text-3xl font-bold underline">Page</h2>
      <Blogs data={blogs} />
    </div>
  );
}
