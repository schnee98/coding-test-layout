export interface Post {
  title: string;
  views: number;
  upload_date: string;
  bookmark: boolean;
}

export const SORT_BY_ORDER_TYPE = {
  1: (posts: Post[]) =>
    posts.slice().sort((a, b) => {
      if (a.bookmark === b.bookmark) return new Date(b.upload_date).getTime() - new Date(a.upload_date).getTime();

      return a.bookmark ? -1 : 1;
    }),
  2: (posts: Post[]) =>
    posts.slice().sort((a, b) => {
      if (a.bookmark === b.bookmark) return b.views - a.views;

      return a.bookmark ? -1 : 1;
    }),
};