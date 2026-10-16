import { usePost } from '../hooks';
import type { PostProps } from '../interfaces';

export const Post = ({ postId, setPostId }: PostProps) => {
  const { status, data, error, isFetching } = usePost({ postId });

  return (
    <div>
      <div>
        <a onClick={() => setPostId!(-1)} href="#">
          Back
        </a>
      </div>
      {!postId || status === 'pending' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <h1>{data.title}</h1>
          <div>
            <p>{data.body}</p>
          </div>
          <div>{isFetching ? 'Background Updating...' : ' '}</div>
        </>
      )}
    </div>
  );
};
