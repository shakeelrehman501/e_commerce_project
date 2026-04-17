import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { ShoppingCart, Heart, Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { categories } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(true);
  let [searchProduct, setSearchProduct] = useState("");
  const { cart, wishlist } = useCart();
  const location = useLocation();
  const homePage = location.pathname === "/";
  const navigat = useNavigate();

  function searchFunc() {
    navigat(`/search?searchCard=${searchProduct}`);
    setSearchProduct("");
  }

  return (
    <header className="bg-white border-b sticky top-0 z-50 ">
      {/* Role Badge */}
      <div className="text-white bg-green-900 text-center py-2 text-sm font-medium">
        User
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center gap-4 ">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            ShopHub
          </Link>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Tabs */}
          <div className="hidden md:flex gap-1 border rounded-lg p-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-6 py-2 rounded ${isActive ? "bg-gray-800 text-white" : "hover:bg-gray-100"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `px-6 py-2 rounded ${isActive ? "bg-gray-800 text-white" : "hover:bg-gray-100"}`
              }
            >
              Products
            </NavLink>
          </div>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link to="/wishlist" className="relative hidden md:block">
              <Heart className="w-6 h-6" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>

            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative "
            >
              {isMenuOpen ? (
                <Menu className="w-6 h-6" />
              ) : (
                <X className="w-6 h-6" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Search + Categories (Static UI) */}
      {!homePage && (
        <nav className="border-t">
          <div className="container mx-auto px-4 py-4">
            {/* Search Bar */}
            <div className="mb-4">
              <div className="relative max-w-xl">
                <input
                  type="text"
                  value={searchProduct}
                  onChange={(e) => setSearchProduct(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") searchFunc();
                  }}
                  placeholder="Search products..."
                  className="w-full px-4 py-2 border rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-gray-900"
                />

                <button
                  onClick={searchFunc}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <Search className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Categories */}
            <ul className="hidden md:flex items-center gap-8">
              <li>
                <Link to="/shop" className="hover:text-gray-600">
                  All Products
                </Link>
              </li>
              {categories.map((category) => (
                <li key={category.name} className="space-x-5">
                  <Link
                    key={category.name}
                    to={`/shop?cat=${category.name}`}
                    className="hover:text-gray-600"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      {!isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-3">
              <li>
                <Link to="/shop" onClick={() => setIsMenuOpen(true)} className="block py-2">
                  All Products
                </Link>
              </li>
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    to={`/shop?category=${cat.name}`}
                    onClick={() => setIsMenuOpen(true)}
                    className="block py-2"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li className="border-t pt-3">
                <Link to="/wishlist" onClick={() => setIsMenuOpen(false)} className="block py-2">
                  Wishlist ({wishlist.length})
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
