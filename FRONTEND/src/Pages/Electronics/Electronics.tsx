import "./Electronics.css";
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

const Electronics = () => {
  const navigate = useNavigate();

  const products: Product[] = [
    {
      id: "headphone1",
      name: "Wireless Headphones",
      category: "Audio",
      price: 1999,
      old: 2999,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "speaker1",
      name: "Bluetooth Speaker",
      category: "Audio",
      price: 1499,
      old: 2499,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "laptop1",
      name: "Slim Laptop",
      category: "Laptops",
      price: 42999,
      old: 52999,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "watch1",
      name: "Smart Watch",
      category: "Wearables",
      price: 2499,
      old: 3999,
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "camera1",
      name: "Digital Camera",
      category: "Cameras",
      price: 36999,
      old: 45999,
      rating: 4.6,
      img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "earbuds1",
      name: "Wireless Earbuds",
      category: "Audio",
      price: 1299,
      old: 2299,
      rating: 4.1,
      img: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "monitor1",
      name: "Full HD Monitor",
      category: "Monitors",
      price: 8999,
      old: 12999,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "powerbank1",
      name: "Fast Charging Power Bank",
      category: "Accessories",
      price: 999,
      old: 1499,
      rating: 4.0,
      img: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const categories = [
    "Audio",
    "Laptops",
    "Wearables",
    "Accessories",
    "Cameras",
    "Monitors",
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
    <div className="fashion-container">
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

        <h2>Electronics</h2>

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

export default Electronics;