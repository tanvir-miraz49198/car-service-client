import { createBrowserRouter } from "react-router-dom";
import Main from "../src/Components/Layout/Main/Main";
import Home from "../src/Components/Pages/Home/Home/Home";
import Login from "../src/Components/Pages/Login/Login";
import Register from "../src/Components/Pages/Register/Register";
import Checkout from "../src/Components/Pages/Checkout/Checkout";
import Bookings from "../src/Components/Pages/Bookings/Bookings";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'checkout/:id',
          element: <Checkout></Checkout>,
          loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
          path: 'bookings',
          element: <PrivetRoute>
             <Bookings></Bookings>
          </PrivetRoute>
        }
      ]
    },
  ]);

  export default router ;