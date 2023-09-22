
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Home/Home';
import About from '../About/About';
import Dashboard from '../Dashboard/Dashboard';
import Products from '../Products/Products';
import SingleProduct from '../SingleProduct/SingleProduct';
import Profile from '../Profile/Profile';
import Edit from '../Edit/Edit';
import DashboardLayout from '../Layout/DashboardLayout';
 const router= createBrowserRouter([
    {
      path:"/",
      element:<MainLayout></MainLayout> ,
      children:[
        {
          path:"/",
          element: <Home></Home>
        },
        {
          path:"/products",
          loader: (() =>fetch(`https://dummyjson.com/products`)),
          element: <Products></Products>
        },
        {
          path:"/products/:id",
          loader: (({params}) =>fetch(`https://dummyjson.com/products/${params.id}`)),
          element:<SingleProduct></SingleProduct>
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/dashboard",
          element:<DashboardLayout></DashboardLayout>,
          children:[
            {
              path:"/dashboard",
              element:<Dashboard></Dashboard>
            }
            ,
            {
             path:"/dashboard/profile",
             element:<Profile></Profile>
            }
            ,
            {
             path:"/dashboard/edit",
             element:<Edit></Edit>
            }
          
          ]
        }
      ]
    },
   
]);
        

export default router;