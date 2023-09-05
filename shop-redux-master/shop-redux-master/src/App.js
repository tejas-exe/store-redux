import { Children } from "react";
import "./App.css";
import RoutComponent from "./Components/RoutComponent";
import Header from "./Components/UIUX/Header";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Catolog from "./Components/Pages/Products";
import { Provider } from "react-redux";
import { Store } from "./Store/ReduxCard";
import ProductDetails from "./Components/Pages/ProductDetails";
import Cartt from "./Components/Pages/Cartt";
import Checkout from "./Components/Pages/Checkout";

const path = createBrowserRouter([
  {
    path: "/",
    element: <RoutComponent />,
    children: [
      { path: "/", element: <Catolog /> },
      { path: "/productdetails/:id", element: <ProductDetails /> },
      { path: "/cart", element: <Cartt /> },
      { path: "/cart/checkout", element: <Checkout /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={Store}>
      <RouterProvider router={path}></RouterProvider>
    </Provider>
  );
}

export default App;
