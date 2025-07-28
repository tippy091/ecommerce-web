import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "react-multi-carousel/lib/styles.css";
import { router } from "./routes.jsx";
import { RouterProvider } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation.jsx";
import ShopApplicationWrapper from "./Pages/ProductListPage/ShopApplicationWrapper.jsx";
import store from "./stores/Store.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <ShopApplicationWrapper />
    </RouterProvider>
  </Provider>
);
