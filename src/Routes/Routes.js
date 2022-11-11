import { createBrowserRouter } from "react-router-dom";
import About from "../component/about/About";
import AddService from "../component/addservice/AddService";
import Blog from "../component/blog/Blog";
import Detail from "../component/detail/Detail";
import Error from "../component/Error/Error";
import Home from "../component/Home/Home";
import Login from "../component/login/Login";
import Private from "../component/privateroute/Private";
import InputReview from "../component/review/InputReview";
import ReviewUser from "../component/reviewUser/ReviewUser";
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
          loader:()=> fetch('https://assignment-11-server-site-chi.vercel.app/home')
        },
        {
          path:'/services',
          element:<Services></Services>,
          loader:()=>  fetch('https://assignment-11-server-site-chi.vercel.app/services')
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/services/:id',
          element:<Detail></Detail>,
          loader:({params})=> fetch(`https://assignment-11-server-site-chi.vercel.app/services/${params.id}`)
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
             path:'/userReview',
             element:<ReviewUser></ReviewUser>
        },
        {
          path:'/review',
          element:<Private><InputReview></InputReview></Private>
        },
        {
          path:'/addService',
          element:<AddService></AddService>
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