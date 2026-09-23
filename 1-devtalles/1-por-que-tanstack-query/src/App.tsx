import { useRandom } from './hooks';

export async function getRandomNumber(): Promise<number> {
  // throw 'No se pudo obtener el número';

  const response = await fetch(
    'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new',
  );

  return await response.json();
}

function App() {
  const { isFetching, randomNumber, error, refetch } = useRandom();

  return (
    <>
      {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Random number: {randomNumber}</h1>
      )}

      {/* <RandomNumber /> */}

      <div>{JSON.stringify(error)}</div>

      <button disabled={isFetching} onClick={() => refetch()}>
        Nuevo número
      </button>
    </>
  );
}

export default App;
