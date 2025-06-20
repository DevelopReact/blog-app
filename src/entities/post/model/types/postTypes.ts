export interface IPost {
  id: number;
  title: string;
  content: string;
  image: string;
  authorId?: string;
  createdAt?: string;
}

export interface PostsStateSchema {
  posts: IPost[];
  error: string;
  isLoading: boolean;
}

export interface StateSchema {
  post: PostsStateSchema;
}
