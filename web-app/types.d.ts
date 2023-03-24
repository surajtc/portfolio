export type Blog = {
    title: string;
    slug: string;
    id: string;
    likes: number;
    content: any;
  };
  
  export type Blogs = {
    blogs: Blog[];
  };
  