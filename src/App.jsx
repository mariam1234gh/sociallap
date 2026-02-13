import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/login/login";
import Register from "./pages/auth/register/register";
import Home from "./pages/home/home";
import Layout from "./pages/layout";
import PostDetails from "./pages/post-details/postDetails";
import Profile from "./pages/Profile/profile";
import ChangePassword from "./pages/Profile/ChangePassword";



const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
    return null;
  }
  return children;
};

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Home /> },
      {path:"register",element:<Register/>},
        {path:"login",element:<Login/>},
        { path: "posts/:id", element: <PostDetails /> },
        {
  path: "profile",
  element: <Profile />,
},
{
  path: "change-password",
  element: <ChangePassword />,
}
        
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}





