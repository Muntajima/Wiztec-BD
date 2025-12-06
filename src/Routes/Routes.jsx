import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import SignUp from "../Pages/Home/SignUp/SignUp";
import Properties from "../Pages/Home/Properties/Properties";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/sign-up',
    element: <SignUp></SignUp>
  },
]);