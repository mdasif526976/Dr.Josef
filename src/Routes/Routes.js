import { createBrowserRouter } from "react-router-dom";
import Error from "../component/Error/Error";
import Home from "../component/Home/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        }
      ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
])