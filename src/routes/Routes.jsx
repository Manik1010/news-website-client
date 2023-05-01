import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Categories from "../pages/News/Categories/Categories";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/User/Login/Login";
import Register from "../pages/User/Regiseter/Register";
import TremsCondition from "../TremsCondition/TremsCondition";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Main></Main>,
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Home to="/catagoriy/0"></Home> 
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
        path: 'terms',
        element: <TremsCondition></TremsCondition>
      }
    ]
  },
  {
    path: "catagories",
    element: <Main></Main>,
    children: [
      {
        path: ':id',
        element: <Categories></Categories>,
        loader: ({ params }) => fetch(`https://the-news-dragon-server-manik1010.vercel.app/categories/${params.id}`)
      },
    ]
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ':id',
        // element: <News></News>,
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({params}) => fetch(`https://the-news-dragon-server-manik1010.vercel.app/news/${params.id}`)
      }
    ]
  },
]);

export default router;