// export type Blog = {
//   title: string;
//   slug: string;
//   id: string;
//   likes: number;
//   content: any;
// };

export type BlogView = {
  slug: string;
  title: string;
  description: string;
  likes: string;
  cover: {
    url: string;
  };
};

interface Blog extends BlogView {
  content: any;
  id: string;
}

export type Blogs = {
  blogs: Blog[];
};
