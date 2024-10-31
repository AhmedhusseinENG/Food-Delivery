

import Home from '../pages/Home/Home';
import Cart from "../pages/Cart/Cart";
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";
import MainLayout from '../layouts/MainLayout/MainLayout.jsx';


import { createBrowserRouter,RouterProvider } from 'react-router-dom'


const AppRouter = () => {

    const router =createBrowserRouter([
        {
          path:"/",
          element:<MainLayout/>,
          children:[
            {
              index:true,
              element:<Home />,
            },
            {
              path:"/cart",
              element:<Cart />,
            },
            {
              path:"/order",
              element:<PlaceOrder />,
            },
          ]
        },
        ])
        

  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter
