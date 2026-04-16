import { Search as SearchIcon } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useSearchParams } from "react-router";

export default function Search() {

  const [URL] = useSearchParams()

  const searchName = URL.get('searchCard') || ''

  const filteredCard = products.filter((p)=>(
  p.name.toLowerCase().includes(searchName.toLowerCase()) ||
  p.brand.toLowerCase().includes(searchName.toLowerCase()) ||
  p.category.toLowerCase().includes(searchName.toLowerCase()) ||
  p.description.toLowerCase().includes(searchName.toLowerCase()) 
  ))
  

  return (
    <div className="container mx-auto px-4 py-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Search Results
        </h1>
        <p className="text-gray-600">
          {filteredCard.length} result{filteredCard.length > 1 ? "s" : ''} found for "{searchName}"
        </p>
      </div>

      {/* Empty State UI */}
      {filteredCard.length < 1 && (
        <div className="max-w-md mx-auto text-center py-16">
        <SearchIcon className="w-16 h-16 mx-auto mb-4 text-gray-400" />
        <h2 className="text-2xl font-bold mb-2">
          No results found
        </h2>
        <p className="text-gray-600 mb-6">
          Try searching with different keywords
        </p>
      </div>
      )}

      {/* Products Grid (UI only dummy) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCard.map((item) => (
          <ProductCard key={item.id} product={item}/>
        ))}
      </div>

    </div>
  );
}