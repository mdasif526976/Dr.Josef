import { createBrowserRouter } from "react-router-dom";
import Error from "../component/Error/Error";

export const router = createBrowserRouter([
    {
        path:'/error',
        element:<Error></Error>
    }
])