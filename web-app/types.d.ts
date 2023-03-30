export interface BlogView {
  id: string;
  slug: string;
  title: string;
  description: string;
  cover: {
    url: string;
  };
}

export interface Vote {
  id: string;
  votes: number;
}

export interface View {
  id: string;
  views: number;
}

interface Blog extends BlogView {
  content: any;
}

export interface Blogs {
  blogs: Blog[];
}
