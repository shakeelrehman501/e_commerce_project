import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { categories } from "../data/products";
// import { useProducts } from "../context/ProductsContext";

import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

import { heroSlides } from "../data/products";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  let bestSeller = products.filter((p) => p.isBestSeller).slice(0, 4);
  let newArrivals = products.filter((p) => p.isNew).slice(0, 4);



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev)=>(prev + 1) % heroSlides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <section className="relative h-125 overflow-hidden bg-gray-200">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 
             ${currentSlide === index ? "opacity-100" : "opacity-0"}
            `}
          >
            <img
            src={slide.image}
              className={`relative w-full h-full object-cover ${index === 0 ? "bg-red-950" : index === 1 ? "bg-yellow-800" : "bg-blue-900"}`}
            />
            <div className="absolute inset-0 flex items-center text-gray-700 container mx-auto">
              <div className={`max-w-2xl text-white `}>
                <h1 className="text-5xl font-bold mb-4 shadow-2xl">{slide.title}</h1>
                <p className="text-xl mb-8">{slide.subtitle}</p>
                <button className="inline-block bg-white text-gray-900 px-8 py-3 rounded hover:bg-gray-100 transition-colors font-medium">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 items-center">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 flex gap-5  rounded-full
              ${currentSlide === index ? "bg-gray-200" : "bg-gray-500"}
                `}
            />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/shop?category=${category.name}`}
              className="group"
            >
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-2">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-center font-medium">{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Best Sellers</h2>
            <Link
              to="/shop"
              className="text-gray-900 font-medium flex items-center gap-1 hover:gap-2 transition-all"
            >
              View All <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSeller.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">New Arrivals</h2>
          <Link
            to="/shop"
            className="text-gray-900 font-medium flex items-center gap-1 hover:gap-2 transition-all"
          >
            View All <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
