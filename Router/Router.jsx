import { createBrowserRouter } from "react-router-dom";
import Main from "../src/Components/Layout/Main/Main";
import Home from "../src/Components/Pages/Home/Home/Home";
import Login from "../src/Components/Pages/Login/Login";
import Register from "../src/Components/Pages/Register/Register";

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
        }
      ]
    },
  ]);

  export default router ;