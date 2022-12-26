export interface PostUserInfo {
  userId: number;
  nickname: string;
  profileImg?: string;
  tripCount?: number;
  score?: number;
  posts: PostType[];
}

export interface PostType {
  postId: string;
  title: string;
  region: string;
  status: boolean;
  duration: string[];
}
