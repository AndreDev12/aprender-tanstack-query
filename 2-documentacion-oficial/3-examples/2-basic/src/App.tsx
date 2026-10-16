import { useState } from 'react';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

import { Post, Posts } from './components';
import { persister, queryClient } from './lib';

function App() {
  const [postId, setPostId] = useState<number>(-1);

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <p>
        As you visit the posts below, you will notice them in a loading state
        the first time you load them. However, after you return to this list and
        click on any posts you have already visited again, you will see them
        load instantly and background refresh right before your eyes!{' '}
        <strong>
          (You may need to throttle your network speed to simulate longer
          loading sequences)
        </strong>
      </p>
      {postId > -1 ? (
        <Post postId={postId} setPostId={setPostId} />
      ) : (
        <Posts setPostId={setPostId} />
      )}
    </PersistQueryClientProvider>
  );
}

export default App;
