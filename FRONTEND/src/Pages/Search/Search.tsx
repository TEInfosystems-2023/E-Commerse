import { useSearchParams, useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import "./Search.css";

const Search = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get("q")?.trim() || "";
  const normalizedQuery = query.toLowerCase();

  const results = query
    ? products.filter((product) => {
        const searchable = `${product.name} ${product.category}`.toLowerCase();
        return searchable.includes(normalizedQuery);
      })
    : [];

  return (
    <div className="search-page">
      <div className="search-header">
        <div>
          <h2>Search Results</h2>
          <p>
            {query
              ? `Showing ${results.length} product${results.length === 1 ? "" : "s"} for "${query}"`
              : "Search for products using the header search bar above."
            }
          </p>
        </div>
      </div>

      {query === "" ? (
        <div className="search-empty">
          Start by typing a product name or category in the header search box.
        </div>
      ) : results.length === 0 ? (
        <div className="search-empty">
          No products matched "{query}". Try broader terms like "shirt", "laptop", or "headphones".
        </div>
      ) : (
        <div className="search-grid">
          {results.map((product) => (
            <div
              key={product.id}
              className="search-card"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img src={product.img} alt={product.name} />
              <div className="card-content">
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <div className="price-row">
                  <span className="price">₹{product.price}</span>
                  <span className="old">₹{product.old}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
