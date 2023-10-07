import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './components/layout/Main.jsx';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Services from './components/Service/Service';
import Register from './components/Register/Register';
import Shape from './components/Shape/Shape'
import Portfolio from './components/Portfolio/Portfolio';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/about",
        element: <About></About>
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      },
      {
        path:"/services",
        element: <Services></Services>
      },
      {
        path:"/register",
        element: <Register></Register>
      },
      {
        path:"/shape",
        element: <Shape></Shape>
      },
      {
        path:"/portfolio",
        element:<Portfolio></Portfolio>
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
