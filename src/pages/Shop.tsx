import { SlidersHorizontal, Star, X } from "lucide-react";
import { categories, brands, products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";

export default function Shop() {
  const [searchURL] = useSearchParams();
  const [selectCategory, setSelectCategory] = useState<string>(
    searchURL.get("cat") || "All Categories",
  );
  const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
  const [range, setRange] = useState<number>(300);
    const [showFilters, setShowFilters] = useState(false);
  const [selectedStar, setSelectedStar] = useState<number | string>(
    "All rating",
  );
  const [sortBy, setSortBy] = useState("Most Popular");

  useEffect(() => {
    const searchedItem = searchURL.get("cat") || "All Categories";
    setSelectCategory(searchedItem);
  }, [searchURL]);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectCategory) {
      filtered = filtered.filter(
        (p) =>
          selectCategory === p.category || selectCategory === "All Categories",
      );
    }
    if (selectedBrand.length > 0) {
      filtered = filtered.filter((p) => selectedBrand.includes(p.brand));
    }
    if (range) {
      filtered = filtered.filter((p) => p.price < range);
    }
    if (selectedStar) {
      filtered = filtered.filter(
        (p) =>
          Math.floor(p.rating) === selectedStar ||
          selectedStar === "All rating",
      );
    }

    switch (sortBy) {
      case "Newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "Low to High":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "High to Low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "A to Z":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z to A":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        filtered.sort((a, b) => b.rating * a.rating);
        break;
    }

    return filtered;
  }, [selectCategory, selectedBrand.length, range, selectedStar, sortBy]);

  function addBrand(brand: string) {
    setSelectedBrand((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  }
  function clearAll(){
    setSelectCategory("All Categories")
    setSelectedBrand([])
    setRange(300)
    setSelectedStar("All rating")
  }
  const FilterPanel = () => (
    <div className="bg-white border rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg">Filters</h3>
        <button
        onClick={clearAll}
        className="text-sm text-gray-600 hover:text-gray-900">
          Clear All
        </button>
      </div>

      {/* Category */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Category</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              checked={selectCategory === "All Categories"}
              onChange={() => setSelectCategory("All Categories")}
              type="radio"
              className="mr-2"
            />
            All Categories
          </label>

          {categories.map((category) => (
            <label key={category.name} className="flex items-center">
              <input
                type="radio"
                checked={selectCategory === category.name}
                onChange={() => setSelectCategory(category.name)}
                className="mr-2"
              />
              {category.name}
            </label>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Brand</h4>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedBrand.includes(brand)}
                onChange={() => addBrand(brand)}
                className="mr-2"
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Price Range</h4>
        <input
          type="range"
          min={0}
          max={300}
          value={range}
          onChange={(e) => setRange(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-sm mt-2">
          <span>$0</span>
          <span>${range}</span>
        </div>
      </div>

      {/* Rating  */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Minimum Rating</h4>
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((v, i) => (
            <div
              key={i}
              onClick={() => setSelectedStar(v)}
              className="flex gap-3 cursor-pointer"
            >
              <input
                checked={selectedStar === v}
                onChange={() => setSelectedStar(v + 1)}
                type="radio"
              />
              {[...Array(5)].map((_, j) => (
                <Star
                  key={j}
                  className={`w-5 h-5 ${j < v ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`}
                />
              ))}
            </div>
          ))}
          <div className="space-x-3">
            <label className="flex gap-3">
              <input
                type="radio"
                name="rating"
                checked={selectedStar === "All rating"}
                onChange={() => setSelectedStar("All rating")}
              />
              All Rating
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <span>Home</span> / <span>Shop</span>
        <span>{`${searchURL.get("cat") ? " /" : ""} ${searchURL.get("cat") || ""}`}</span>
      </nav>

      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64">
          <FilterPanel />
        </aside>

        {/* Main */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold">All Products</h1>
              <p className="text-gray-600">
                {filteredProducts.length} products found
              </p>
            </div>

            <div className="flex gap-3">
              <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex lg:hidden items-center gap-2 px-4 py-2 border rounded ">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border rounded"
              >
                <option value="Most Popular">Most Popular</option>
                <option value="Newest">Newest</option>
                <option value="Low to High">Price: Low to High</option>
                <option value="High to Low">Price: High to Low</option>
                <option value="A to Z">Name: A to Z</option>
                <option value="Z to A">Name: Z to A</option>
              </select>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 bg-black/50 bg-opacity-100 z-50 ">
              <div className="absolute right-0 top-0 bottom-0 w-80 bg-white overflow-y-auto shadow-2xl border-l-2  border-l-gray-300">
                <div className="p-4 border-b flex justify-between items-center">
                  <h3 className="font-bold text-lg">Filters</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="p-4">
                  <FilterPanel />
                </div>
              </div>
            </div>
          )}

          {/* Products */}
          {filteredProducts.length < 1 && (
            <div className="text-center mt-40">
            <h1 className="text-3xl font-semibold text-gray-700">No Product found</h1>
          </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredProducts.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
