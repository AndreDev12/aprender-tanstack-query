import { useQuery } from '@tanstack/react-query';

import { getRandomNumber } from '../App';

export const useRandom = () => {
  const {
    isLoading,
    isFetching,
    data: randomNumber,
    error,
    refetch,
  } = useQuery({
    queryKey: ['randomNumber'],
    queryFn: getRandomNumber,
    // retry: false,
    // staleTime: 1000 * 5,
    // refetchOnWindowFocus: false,
  });

  return { isLoading, isFetching, randomNumber, error, refetch };
};
