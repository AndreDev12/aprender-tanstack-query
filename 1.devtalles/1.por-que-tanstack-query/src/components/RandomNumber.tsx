import { useQuery } from '@tanstack/react-query';

import { getRandomNumber } from '../App';

export const RandomNumber = () => {
  const { data } = useQuery({
    queryKey: ['randomNumber'],
    queryFn: getRandomNumber,
    staleTime: 1000 * 5,
  });

  return <div>Random number: {data}</div>;
};
