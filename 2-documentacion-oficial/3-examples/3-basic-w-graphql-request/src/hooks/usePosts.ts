import { useQuery } from '@tanstack/react-query';
import { gql, request } from 'graphql-request';

import type { Post } from '../interfaces';
import { endpoint } from '../lib';

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const {
        posts: { data },
      } = await request<{ posts: { data: Array<Post> } }>(
        endpoint,
        gql`
          query {
            posts {
              data {
                id
                title
              }
            }
          }
        `,
      );
      return data;
    },
  });
}
