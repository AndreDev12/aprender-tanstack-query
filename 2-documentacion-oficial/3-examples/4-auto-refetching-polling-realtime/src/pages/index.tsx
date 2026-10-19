import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function Example() {
  const queryClient = useQueryClient();
  const [intervalMs, setIntervalMs] = useState(1000);
  const [value, setValue] = useState('');

  const { status, data, error, isFetching } = useQuery({
    queryKey: ['todos'],
    queryFn: async (): Promise<Array<string>> => {
      const response = await fetch('/api/data');
      if (!response.ok) throw new Error('Failed to fetch data');
      return await response.json();
    },
    // Refetch the data every second
    refetchInterval: intervalMs,
  });

  const addMutation = useMutation({
    mutationFn: async (add: string) => {
      const response = await fetch(`/api/data?add=${add}`);
      if (!response.ok) throw new Error('Failed to add todo');
    },
    onSuccess: (mutationResult) => {
      console.log('Mutation result:', mutationResult); // Testing
      return queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const clearMutation = useMutation({
    mutationFn: async (digit: number) => {
      const response = await fetch(`/api/data?clear=${digit}`);
      if (!response.ok) throw new Error('Failed to delete todo');
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });

  if (status === 'pending') return <h1>Loading...</h1>;
  if (status === 'error') return <span>Error: {error.message}</span>;

  return (
    <div>
      <h1>Auto Refetch with refetchInterval set to {intervalMs}ms</h1>
      <p>
        This example is best experienced on your own machine, where you can open
        multiple tabs to the same localhost server and see your changes
        propagate between the two.
      </p>
      <label>
        Query Interval speed (ms):{' '}
        <input
          value={intervalMs}
          onChange={(ev) => setIntervalMs(Number(ev.target.value))}
          type="number"
          step="100"
        />{' '}
        <span
          style={{
            display: 'inline-block',
            marginLeft: '.5rem',
            width: 10,
            height: 10,
            background: isFetching ? 'green' : 'transparent',
            transition: !isFetching ? 'all .3s ease' : 'none',
            borderRadius: '100%',
            transform: 'scale(2)',
          }}
        />
      </label>
      <h2>Todo List</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addMutation.mutate(value, {
            onSuccess: () => {
              setValue('');
            },
          });
        }}
      >
        <input
          placeholder="enter something"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
        />
      </form>
      <ul>
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-5 m-2">
            <li>{item}</li>
            <button
              className="bg-red-900 border p-1"
              onClick={() => clearMutation.mutate(index)}
            >
              X
            </button>
          </div>
        ))}
      </ul>
      <div>
        {/* <button
          onClick={() => {
            clearMutation.mutate();
          }}
        >
          Clear All
        </button> */}
      </div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}
