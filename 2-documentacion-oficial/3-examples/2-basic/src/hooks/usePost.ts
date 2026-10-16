import { useQuery } from '@tanstack/react-query';

import type { Post, UsePostProps } from '../interfaces';

export function usePost({ postId }: UsePostProps) {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: async (): Promise<Post> => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
      );
      return await response.json();
    },
    enabled: !!postId,
  });
}
