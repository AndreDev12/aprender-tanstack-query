import { useQuery } from '@tanstack/react-query';
import { NavLink } from 'react-router';
// import { useEffect, useState } from 'react';

import type { Data } from '../interface';

export const Query = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: async (): Promise<Data> =>
      fetch('https://api.github.com/repos/TanStack/query').then((res) =>
        res.json(),
      ),
  });

  if (isPending) return <h2>Loading...</h2>;

  if (error) return 'An error has occurred: ' + error.message;

  // const [data, setData] = useState<Data | undefined>(undefined);
  // const [isLoading, setIsLoading] = useState(true);

  // const getQueryRepository = async () => {
  //   const response = await fetch('https://api.github.com/repos/TanStack/query');
  //   await new Promise<void>((resolve) => {
  //     setTimeout(() => resolve(), 1500);
  //   });
  //   const data = await response.json();
  //   setData(data);
  //   setIsLoading(false);
  //   return data;
  // };

  // useEffect(() => {
  //   getQueryRepository();
  // }, []);

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.description}</p>
      <strong>👀 {data?.subscribers_count}</strong>{' '}
      <strong>✨ {data?.stargazers_count}</strong>{' '}
      <strong>🍴 {data?.forks_count}</strong>
      {/* {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{data?.name}</h1>
          <p>{data?.description}</p>
          <strong>👀 {data?.subscribers_count}</strong>{' '}
          <strong>✨ {data?.stargazers_count}</strong>{' '}
          <strong>🍴 {data?.forks_count}</strong>
        </>
      )} */}
      <NavLink style={{ display: 'block' }} to="/tanstack">
        TanStack
      </NavLink>
    </div>
  );
};
