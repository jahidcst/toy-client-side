import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../ErrorPge/Error";
import Blogs from "../Pages/Home/Blogs/Blogs";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      
    ]
  },
]);

export default router