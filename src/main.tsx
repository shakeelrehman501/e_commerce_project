import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import {CartProvider} from './context/CartContext'
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <> 
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
  </>,
);
