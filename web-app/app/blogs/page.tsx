import { getBlogs } from "@/lib/getBlogs";
import Blogs from "./components/Blogs";

// export const revalidate = 0;
// export const dynamic = "force-dynamic";
// export const fetchCache = "default-no-store";

export default async function BlogsPage() {
  const { blogs } = await getBlogs();

  if (!blogs) {
    return "loading...";
  }

  return (
    <div>
      <h2 className="text-3xl font-bold">Blogs</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
        deleniti sunt aliquid temporibus consequuntur magnam, deserunt officia
        vitae architecto vel. Inventore, doloribus itaque maxime totam
        laboriosam unde repudiandae voluptas explicabo?
      </p>
      <Blogs data={blogs} />
    </div>
  );
}
