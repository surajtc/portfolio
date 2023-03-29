import Blogs from "./components/Blogs";

export default async function BlogsPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold underline">Page</h2>
      <Blogs text="SERVER"/>
    </div>
  );
}
