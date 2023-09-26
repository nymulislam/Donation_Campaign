import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import Home from './components/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
      path: "/donation",
      element: <Donation></Donation>,
      loader: () => fetch('/public/Data.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
