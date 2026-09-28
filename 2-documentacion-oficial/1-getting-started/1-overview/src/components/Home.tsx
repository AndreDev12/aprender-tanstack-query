import { NavLink } from 'react-router';

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Open source software for web developers</p>
      <NavLink to="/tanstack">TanStack</NavLink>
    </div>
  );
};
