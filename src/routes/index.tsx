import { createBrowserRouter } from 'react-router-dom';
import { GameInfoContainer } from '../containers';
import { HomePage } from '../pages';

export const myAppRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <h2>Custom Error is here</h2>,
    children: [
      {
        path: '/:id',
        element: <GameInfoContainer />,
      },
    ],
  },
]);
