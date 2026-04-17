
import {createBrowserRouter, createRoutesFromElements, Route } from "react-router";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import App from "./App";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="search" element={<Search />} />
        </Route>,
     ));
