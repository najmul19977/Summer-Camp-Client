import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import OurClass from "../Pages/OurClass/OurClass";
import Instructor from "../Pages/Instructor/Instructor";
import Deshbord from "../Pages/Deshbord/Deshbord";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'ourclass',
          element:<OurClass></OurClass>
        },
        {
          path:'instructor',
          element:<Instructor></Instructor>
        },
        {
          path:'deshbord',
          element:<Deshbord></Deshbord>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
        
      ]
      
    },
    {
        path:'*',
        element:<Error></Error>,
    }
   
    
  ]);