import "./Sports.css";
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

const Sports = () => {
  const navigate = useNavigate();

  const products: Product[] = [
    {
      id: "football1",
      name: "Professional Football",
      category: "Outdoor Sports",
      price: 799,
      old: 1199,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "bat1",
      name: "Cricket Bat",
      category: "Cricket",
      price: 1499,
      old: 2199,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1624880357913-a8539238245b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "dumbbell1",
      name: "Adjustable Dumbbells",
      category: "Fitness",
      price: 2499,
      old: 3499,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "yoga1",
      name: "Yoga Mat",
      category: "Fitness",
      price: 699,
      old: 999,
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "racket1",
      name: "Badminton Racket",
      category: "Indoor Sports",
      price: 999,
      old: 1499,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "helmet1",
      name: "Cycling Helmet",
      category: "Cycling",
      price: 1299,
      old: 1799,
      rating: 4.1,
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "gloves1",
      name: "Gym Gloves",
      category: "Fitness",
      price: 399,
      old: 699,
      rating: 4.0,
      img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "jersey1",
      name: "Sports Jersey",
      category: "Sportswear",
      price: 899,
      old: 1299,
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const categories = [
    "Outdoor Sports",
    "Cricket",
    "Fitness",
    "Indoor Sports",
    "Cycling",
    "Sportswear",
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
    <div className="sports-container">
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

        <h2>Sports</h2>

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

export default Sports;