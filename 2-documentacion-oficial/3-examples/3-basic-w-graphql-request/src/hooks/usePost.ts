import { useQuery } from '@tanstack/react-query';
import { gql, request } from 'graphql-request';

import type { Post } from '../interfaces';
import { endpoint } from '../lib';

export function usePost(postId: number) {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: async () => {
      const { post } = await request<{ post: Post }>(
        endpoint,
        gql`
        query {
          post(id: ${postId}){
            id
            title
            body
          }
        }
        `,
      );
      return post;
    },
    enabled: !!postId,
  });
}
