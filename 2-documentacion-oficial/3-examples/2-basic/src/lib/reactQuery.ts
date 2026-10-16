import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //   gcTime: 1000 * 60 * 60 * 24, // 24 hours
      gcTime: 1000 * 60 * 1, // 1 minute
    },
  },
});

export const persister = createAsyncStoragePersister({
  storage: window.localStorage,
});
