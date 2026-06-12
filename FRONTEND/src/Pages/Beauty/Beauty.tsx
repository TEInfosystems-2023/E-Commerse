import "./Beauty.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  old: number;
  rating: number;
  img: string;
};

type SortType = "relevance" | "low" | "high" | "rating";

const Beauty = () => {
  const navigate = useNavigate();

  const products: Product[] = [
    {
      id: "serum1",
      name: "Vitamin C Face Serum",
      category: "Skincare",
      price: 499,
      old: 799,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "lipstick1",
      name: "Matte Lipstick",
      category: "Makeup",
      price: 299,
      old: 499,
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1631214524020-3f1e4b2f89f8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "shampoo1",
      name: "Herbal Shampoo",
      category: "Hair Care",
      price: 349,
      old: 599,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "facewash1",
      name: "Gentle Face Wash",
      category: "Skincare",
      price: 249,
      old: 399,
      rating: 4.1,
      img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "perfume1",
      name: "Luxury Perfume",
      category: "Fragrances",
      price: 999,
      old: 1499,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "sunscreen1",
      name: "SPF 50 Sunscreen",
      category: "Skincare",
      price: 399,
      old: 699,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "foundation1",
      name: "Liquid Foundation",
      category: "Makeup",
      price: 599,
      old: 899,
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "bodylotion1",
      name: "Moisturizing Body Lotion",
      category: "Bath & Body",
      price: 449,
      old: 699,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const categories = [
    "Skincare",
    "Makeup",
    "Hair Care",
    "Bath & Body",
    "Fragrances",
  ];

  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortType>("relevance");

  const toggle = (cat: string) => {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filtered = products.filter((p) => {
    const matchCat = selected.length === 0 || selected.includes(p.category);
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const sorted = [...filtered];

  if (sort === "low") sorted.sort((a, b) => a.price - b.price);
  if (sort === "high") sorted.sort((a, b) => b.price - a.price);
  if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);

  return (
    <div className="beauty-container">
      <aside className="sidebar">
        <h3>FILTERS</h3>
        <p className="count">{products.length}+ Products</p>

        <div className="search-box">
          <span className="icon">🔍</span>
          <input
            placeholder="Search category"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <h4>Category</h4>

        {categories.map((cat) => (
          <label key={cat} className="category-item">
            <input
              type="checkbox"
              checked={selected.includes(cat)}
              onChange={() => toggle(cat)}
            />
            {cat}
          </label>
        ))}
      </aside>

      <main className="main">
        <div className="sort-bar">
          <span>Sort by</span>
          <button onClick={() => setSort("relevance")}>Relevance</button>
          <button onClick={() => setSort("low")}>Price Low</button>
          <button onClick={() => setSort("high")}>Price High</button>
          <button onClick={() => setSort("rating")}>Rating</button>
        </div>

        <h2>Beauty</h2>

        <div className="grid">
          {sorted.map((p) => (
            <div
              className="card"
              key={p.id}
              onClick={() => navigate(`/product/${p.id}`)}
              style={{ cursor: "pointer" }}
            >
              <img src={p.img} alt={p.name} />

              <p className="name">{p.name}</p>

              <div className="price">
                ₹{p.price}
                <span className="old">₹{p.old}</span>
              </div>

              <p className="offer">
                {Math.round(((p.old - p.price) / p.old) * 100)}% off
              </p>

              <span className="delivery">Free Delivery</span>

              <div className="rating">⭐ {p.rating}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Beauty;