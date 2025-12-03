import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import PetCategory from "../pages/PetCategory";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import PetDetails from "../pages/PetDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";
import ForgetPassword from "../pages/ForgetPassword";
import Support from "../pages/Support";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("/pet.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/category/:serviceId",
        element: <PetCategory></PetCategory>,
      },
      {
        path: "/profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/pet-details/:serviceId",
        element: <PetDetails></PetDetails>,
        loader: () => fetch("/pet.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },

  {
    path: "/*",
    element: <h2>Error-404</h2>,
  },
]);

export default router;
