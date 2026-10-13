import { useState, type FormEvent } from 'react';
import { useMutation } from '@tanstack/react-query';

export const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const mutation = useMutation({
    mutationFn: (newTodo: { id: Date; title: string }) =>
      fetch('/todos', { method: 'POST', body: JSON.stringify(newTodo) }),
  });

  const onCreateTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ id: new Date(), title });
  };

  return (
    <form onSubmit={onCreateTodo}>
      {mutation.error && (
        <h5 onClick={() => mutation.reset()}>{mutation.error.message}</h5>
      )}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <button type="submit">Create Todo</button>
    </form>
  );
};
