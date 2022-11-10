import { createBrowserRouter } from "react-router-dom";
import About from "../component/about/About";
import Blog from "../component/blog/Blog";
import Error from "../component/Error/Error";
import Home from "../component/Home/Home";
import Login from "../component/login/Login";
import Signup from "../component/signup/Signup";
import Main from "../layout/Main";
import Services from "../services/Services";

export const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=> fetch('http://localhost:5000/home')
        },
        {
          path:'/services',
          element:<Services></Services>,
          loader:()=>  fetch('http://localhost:5000/services')
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/about',
          element:<About></About>
        },
      ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
])