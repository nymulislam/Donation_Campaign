import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import DonationDetails from './components/DonationDetails/DonationDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "donation/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('/public/data.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch('/public/data.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
