import { useState } from 'react';
import productsData from './data/products';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import ProductCard from './components/ProductCard';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [sortOption, setSortOption] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const categories = [...new Set(productsData.map((p) => p.category))];


  const filteredProducts = productsData
    .filter((p) =>
      selectedCategory === "All" ? true : p.category === selectedCategory
    )
    .filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((p) =>
      showFavoritesOnly ? favorites.includes(p.id) : true
    );


  const sortedProducts = [...filteredProducts];
  if (sortOption === "low-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }


  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      <Navbar darkMode={darkMode} toggleMode={() => setDarkMode(!darkMode)} />

      <div className={darkMode ? "bg-dark text-light min-vh-100" : "bg-light text-dark min-vh-100"}>
        <div className="container py-4">
        <h1 className="text-center mb-4 fw-bold display-5 border-bottom pb-2">🛍️ Product Showcase</h1>


          {/* Category Filter */}
          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            darkMode={darkMode}
          />

          {/* Search Bar */}
          <div className="d-flex justify-content-center mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="🔍 Search by product name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ maxWidth: "400px" }}
            />
          </div>

          {/* Sort + Favorites Toggle */}
          <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
            <select
              className="form-select w-auto"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Sort by</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>

            <button
              className={`btn btn-sm ${showFavoritesOnly ? "btn-danger" : "btn-outline-danger"}`}
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            >
              {showFavoritesOnly ? "❤️ Showing Favorites" : "🤍 Show Favorites Only"}
            </button>
          </div>

          {/* Empty State */}
          {sortedProducts.length === 0 && (
            <p className="text-center text-muted">😢 No products found.</p>
          )}

          {/* Product Grid */}
          <div className="row">
            {sortedProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                isFavorite={favorites.includes(item.id)}
                onToggleFavorite={toggleFavorite}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
