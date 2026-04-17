import { Heart, ShoppingCart } from "lucide-react";
import type { Product } from "../data/products";
import { useCart } from "../context/CartContext";
import { Link } from "react-router";

export default function ProductCard( {product}:{product:Product} ) {

  const {addToCart, addToWishlist, wishlist} = useCart()

  function handleCart(e:React.MouseEvent){
    e.preventDefault()
    addToCart({
      id:product.id,
      image:product.image,
      name:product.name,
      price:product.price,
      quantity:1  
    })
  }

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {product.discount && (
              <span className="bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
                -{product.discount}%
              </span>
            )}
            {product.isNew && (
              <span className="bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded">
                New
              </span>
            )}
            {product.stock !== undefined &&
              product.stock < 10 &&
              product.stock > 0 && (
                <span className="bg-orange-500 text-white px-2 py-1 text-xs font-semibold rounded">
                  Only {product.stock} left
                </span>
              )}
            {product.stock === 0 && (
              <span className="bg-gray-500 text-white px-2 py-1 text-xs font-semibold rounded">
                Out of Stock
              </span>
            )}
          </div>
          <button
          onClick={(e)=>{e.preventDefault(), addToWishlist(product.id)}}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
            <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? "fill-red-500 text-red-500 " : "text-gray-400"}`} />
          </button>
        </div>
        <div className="p-4">
          <h3 className="font-medium mb-1 line-clamp-2">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={
                    i < Math.floor(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg font-bold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <button 
          onClick={handleCart}
          className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}