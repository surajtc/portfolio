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
      <h2 className="text-2xl py-2 font-bold tracking-tight">Welcome to my machine learning-centric blog</h2>
      <p className="text-lg pb-6 font-normal leading-relaxed tracking-tight text-gray-700 dark:text-gray-400">
        {
          " where I cover cutting-edge algorithms and the latest advancements in deep learning. Whether you're a seasoned AI expert or a curious learner, my page offers informative and entertaining content. Join me in exploring the exciting world of machine learning!"
        }
      </p>
      <Blogs data={blogs} />
    </div>
  );
}
