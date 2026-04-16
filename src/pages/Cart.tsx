import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router";
import { useState } from "react";

export default function Cart() {
  const { cart, removeCart, updateQuantity } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = appliedCoupon === "1234" ? subtotal * 0.1 : 0;
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal - discount + shipping;

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === "1234") {
      setAppliedCoupon("1234");
    }
  };


  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-gray-600 mb-6">
            Add some products to your cart to continue shopping
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white border rounded-lg">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 border-b last:border-b-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 shrink-0 bg-gray-200 rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium mb-1">{item.name}</h3>
                  {item.size && (
                    <p className="text-sm text-gray-600">{item.size}</p>
                  )}
                  {item.color && (
                    <p className="text-sm text-gray-600">{item.color}</p>
                  )}
                  <p className="text-lg font-bold mt-2">{item.price}</p>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <button
                    onClick={() => removeCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <div className="flex items-center gap-2 border rounded">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-3 py-1 min-w-12 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white border rounded-lg p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            {/* Coupon */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Coupon Code: 1234
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter code"
                  className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                  disabled={appliedCoupon !== null}
                />
                <button
                  onClick={handleApplyCoupon}
                  disabled={appliedCoupon !== null}
                  className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Apply
                </button>
              </div>
              {appliedCoupon && (
                <p className="text-sm text-green-600 mt-2">
                  Coupon "{appliedCoupon}" applied!
                </p>
              )}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 mb-6 pb-6 border-b">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              {subtotal < 50 && (
                <p className="text-sm text-gray-600">
                  Add ${(50 - subtotal).toFixed(2)} more for free shipping
                </p>
              )}
            </div>

            <div className="flex justify-between text-xl font-bold mb-6">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
