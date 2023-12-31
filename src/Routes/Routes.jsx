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
import ManageClass from "../Pages/Deshbord/ManageClass/ManageClass";
import UserHome from "../Pages/Deshbord/UserHome/UserHome";
import AdminHome from "../Pages/Deshbord/AdminHome/AdminHome";

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
            path:'userhome',
            element:<UserHome></UserHome>

          },
         {
          path:'myclass',
          element:<MyClass></MyClass>
         },
         {
          path:'adminhome',
          element:<AdminRouts><AdminHome></AdminHome></AdminRouts>

         },
         {
          path:'allusers',
          element:<AdminRouts><AllUser></AllUser></AdminRouts>
         },
         {
          path:'addclass',
          element:<AdminRouts><AddClass></AddClass></AdminRouts>
         },
         {
          path:'manageclass',
          element:<AdminRouts><ManageClass></ManageClass></AdminRouts>
         }
        ]
      
    },
    {
        path:'*',
        element:<Error></Error>,
    }
   
    
  ]);