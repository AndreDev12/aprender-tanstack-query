import { NavLink } from 'react-router';

export const Tanstack = () => {
  return (
    <div>
      <h1>TanStack</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tanstack/query">Query</NavLink>
      </div>
    </div>
  );
};
