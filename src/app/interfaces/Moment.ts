interface CommentMoment {
  text: string;
  username: string;
}

export interface Moment {
  id?: number;
  title: string;
  description: string;
  image: string;
  created_at?: string;
  updated_at?: string;
  comments?: CommentMoment[];
}
