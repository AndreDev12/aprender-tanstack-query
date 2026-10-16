import { useQueryClient } from '@tanstack/react-query';

import type { PostsProps } from '../interfaces';
import { usePosts } from '../hooks';

export const Posts = ({ setPostId }: PostsProps) => {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = usePosts();

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {status === 'pending' ? (
          'Loading...'
        ) : status === 'error' ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div>
              {data.map(({ id, title }) => (
                <p key={id}>
                  <a
                    onClick={() => setPostId!(id)}
                    href={`#${id}`}
                    style={
                      // We can access the query data here to show bold links for
                      // ones that are cached
                      queryClient.getQueryData(['post', id])
                        ? { fontWeight: 'bold', color: 'green' }
                        : {}
                    }
                  >
                    {title}
                  </a>
                </p>
              ))}
            </div>
            <div>{isFetching ? 'Background Updating...' : ' '}</div>
          </>
        )}
      </div>
    </div>
  );
};
