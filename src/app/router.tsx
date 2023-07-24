import { createBrowserRouter } from 'react-router-dom'

import App from './App'

import { Error, Home, NotFound, Page } from '~/pages'

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
        path: '/page',
        element: <Page />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])
