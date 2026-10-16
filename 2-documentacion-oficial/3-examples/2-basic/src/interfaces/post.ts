export type Post = {
  id: number;
  title: string;
  body: string;
};

export interface UsePostProps extends PostProps {}

export interface PostProps {
  postId?: number;
  setPostId?: React.Dispatch<React.SetStateAction<number>>;
}
