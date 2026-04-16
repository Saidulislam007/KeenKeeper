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
import Home from './components/pages/Home.jsx';
import FriendDetails from './components/pages/FriendDetails.jsx';
import { FriendProvider } from './components/context/FriendContext.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages></HomePages>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home></Home>,

      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/friendDetails/:id",
        element: <FriendDetails></FriendDetails>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router} />
    </FriendProvider>
  </StrictMode>,
)
