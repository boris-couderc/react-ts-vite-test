import { createBrowserRouter } from 'react-router-dom'

import App from './App'

import { Error, Home, Search, NotFound, Example } from '~/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/example',
        element: <Example />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])
