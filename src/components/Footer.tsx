
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
  

  return (
     <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">ShopHub</h3>
            <p className="text-sm mb-4">
              Your one-stop shop for quality products at great prices.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="hover:text-white">Shop</Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-white">Cart</Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-white">Wishlist</Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-white">Help</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2026 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}