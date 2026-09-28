import { Routes, Route } from 'react-router';

import { Home, Query, Tanstack } from './components';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />

        <Route path="tanstack">
          <Route index element={<Tanstack />} />
          <Route path="query" element={<Query />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
