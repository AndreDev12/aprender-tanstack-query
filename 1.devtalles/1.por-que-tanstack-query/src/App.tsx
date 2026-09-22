import { useQuery } from '@tanstack/react-query';

async function getRandomNumber(): Promise<number> {
  let data: number = 0;

  const response = await fetch(
    'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new',
  );
  data = await response.json();

  return data;
}

function App() {
  const {
    isLoading,
    isFetching,
    data: randomNumber,
    error,
    refetch,
  } = useQuery({
    queryKey: ['randomNumber'],
    queryFn: getRandomNumber,
  });

  return (
    <>
      {isLoading ? <h1>Loading...</h1> : <h1>Random number: {randomNumber}</h1>}

      <div>{JSON.stringify(error)}</div>

      <button disabled={isFetching} onClick={() => refetch()}>
        Nuevo número
      </button>
    </>
  );
}

export default App;
