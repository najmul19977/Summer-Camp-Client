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
import Sectet from "../Pages/Sectet/Sectet";
import PrivateRouts from "./PrivateRouts";
import MyClass from "../Pages/Deshbord/MyClass/MyClass";
import AllUser from "../Pages/Deshbord/AllUser/AllUser";
import AddClass from "../Pages/Deshbord/AddClass/AddClass";
import AdminRouts from "./AdminRoutes";

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
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        },
        {
          path:'secret',
          element:<PrivateRouts><Sectet></Sectet></PrivateRouts>
        }
        
      ],
    
      
    },
    {
      
        path:'deshbord',
        element:<PrivateRouts><Deshbord></Deshbord></PrivateRouts>,
        children:[
         {
          path:'myclass',
          element:<MyClass></MyClass>
         },
         {
          path:'allusers',
          element:<AllUser></AllUser>
         },
         {
          path:'addclass',
          element:<AdminRouts><AddClass></AddClass></AdminRouts>
         }
        ]
      
    },
    {
        path:'*',
        element:<Error></Error>,
    }
   
    
  ]);