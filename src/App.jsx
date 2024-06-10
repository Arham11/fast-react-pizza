import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Error from "./ui/Error";
import Home from "./ui/Home";
import Menu, { loader as MenuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order, { loader as OrderLoader } from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    // no need for a route for AppLayout is the entry point of all the routes (Parent of all route)
    // AppLayout component must content and <Outlet /> component for rendering children routes
    element: <AppLayout />,
    // the erorrelment will bubble up to the parent route if it not present inside any child route
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: MenuLoader,
        // here the error is handle inside the child component hence the error element will not
        // bubbl  up to prarent ele
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: OrderLoader,
        // here the error is handle inside the child component hence the error element will not
        // bubbl  up to prarent ele
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
