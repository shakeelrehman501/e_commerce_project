// UI-ONLY VERSION - No functionality, just visual design
import { Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import { Link } from "react-router";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const { wishlist } = useCart();

  console.log(wishlist);

  const filteredCart = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

      {filteredCart.length === 0 ? (
        <div className="max-w-md mx-auto text-center py-16">
          <Heart className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-6">
            Save your favorite items to your wishlist
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <p className="text-gray-600 mb-6">
            {wishlist.length} item{wishlist.length > 1 ? "s" : ""} in your
            wishlist
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCart.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
