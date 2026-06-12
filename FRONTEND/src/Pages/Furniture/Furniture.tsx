import "./Furniture.css";
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

const Furniture = () => {
  const navigate = useNavigate();

  const products: Product[] = [
    {
      id: "sofa2",
      name: "Modern Sofa Set",
      category: "Living Room",
      price: 18999,
      old: 24999,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "bed1",
      name: "King Size Bed",
      category: "Bedroom",
      price: 22999,
      old: 29999,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "table1",
      name: "Wooden Dining Table",
      category: "Dining",
      price: 14999,
      old: 19999,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "chair1",
      name: "Office Chair",
      category: "Office Furniture",
      price: 5999,
      old: 7999,
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "wardrobe1",
      name: "3 Door Wardrobe",
      category: "Bedroom",
      price: 16999,
      old: 22999,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "desk1",
      name: "Study Desk",
      category: "Office Furniture",
      price: 7499,
      old: 9999,
      rating: 4.1,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "tvunit1",
      name: "TV Unit Cabinet",
      category: "Living Room",
      price: 9999,
      old: 13999,
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "bookshelf1",
      name: "Wooden Bookshelf",
      category: "Storage",
      price: 8499,
      old: 11999,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const categories = [
    "Living Room",
    "Bedroom",
    "Dining",
    "Office Furniture",
    "Storage",
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
    <div className="furniture-container">
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

        <h2>Furniture</h2>

        <div className="grid">
          {sorted.map((p) => (
            <div
              className="card"
              key={p.id}
              onClick={() => navigate(`/product/${p.id}`)}
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

export default Furniture;