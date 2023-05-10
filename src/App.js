import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import Shopping from "./components/Shopping/Shopping";
import OrderReview from "./components/OrderReview/OrderReview";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import { LoaderOfDataAndCart } from "./loader/LoaderOfDataAndCart";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import PrivateRouter from "./components/PrivateRouter";
import Shipment from "./components/Shipment/Shipment";

function App() {
  // const loadData = () => fetch("products.json");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: LoaderOfDataAndCart,
          element: <Shopping></Shopping>,
        },
        {
          path: "shopping",
          loader: LoaderOfDataAndCart,
          element: <Shopping></Shopping>,
        },
        {
          path: "shipment",
          loader: LoaderOfDataAndCart,
          element: (
            <PrivateRouter>
              <Shipment></Shipment>
            </PrivateRouter>
          ),
        },
        {
          path: "orderreview",
          loader: LoaderOfDataAndCart,
          element: <OrderReview></OrderReview>,
        },
        {
          path: "manageinventory",
          element: (
            <PrivateRouter>
              <ManageInventory></ManageInventory>
            </PrivateRouter>
          ),
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "signup",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
