import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePages from './components/homePages/HomePages.jsx';
import ErrorPage from './components/pages/ErrorPage.jsx';
import Timeline from './components/pages/Timeline.jsx';
import Stats from './components/pages/Stats.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages></HomePages>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
