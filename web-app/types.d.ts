export interface BlogView {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
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
  content: string;
}
