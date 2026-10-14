import { useQuery } from '@tanstack/react-query';

import { type GithubQuery } from '../interfaces';

export const Example = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: async (): Promise<GithubQuery> => {
      const response = await fetch(
        'https://api.github.com/repos/TanStack/query',
      );
      return await response.json();
    },
  });

  if (isPending) return <div>Loading...</div>;

  if (error) return <div>"An error occurred: " + {error.message}</div>;

  const {
    full_name,
    description,
    subscribers_count,
    stargazers_count,
    forks_count,
  } = data;

  return (
    <div>
      <h1>{full_name}</h1>
      <p>{description}</p>
      <strong>👀 {subscribers_count}</strong>{' '}
      <strong>✨ {stargazers_count}</strong>
      <strong>🍴 {forks_count}</strong>
      <div>{isFetching ? 'Updating' : ''}</div>
    </div>
  );
};
