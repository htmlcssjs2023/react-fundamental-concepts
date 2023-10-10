import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './components/layout/Main';
import Home from './components/Home/Home';
import ViewRsult from './components/ViewResult/ViewRsult';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'milligram/dist/milligram.min.css';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/view',
        element:<ViewRsult></ViewRsult>
      }
      
    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
