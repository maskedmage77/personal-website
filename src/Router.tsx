import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ExperiencePage from './pages/Experience.page';
import HomePage from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/experience',
    element: <ExperiencePage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
