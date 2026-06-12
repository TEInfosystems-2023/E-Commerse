import "./Food.css";
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

const Food = () => {
  const navigate = useNavigate();

  const products: Product[] = [
    {
      id: "apple1",
      name: "Fresh Red Apples",
      category: "Fruits",
      price: 199,
      old: 299,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "bread1",
      name: "Whole Wheat Bread",
      category: "Bakery",
      price: 49,
      old: 79,
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "milk1",
      name: "Fresh Milk",
      category: "Dairy",
      price: 59,
      old: 79,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "chips1",
      name: "Potato Chips",
      category: "Snacks",
      price: 99,
      old: 149,
      rating: 4.1,
      img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "juice1",
      name: "Orange Juice",
      category: "Beverages",
      price: 129,
      old: 179,
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "rice1",
      name: "Premium Basmati Rice",
      category: "Groceries",
      price: 499,
      old: 699,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "egg1",
      name: "Farm Fresh Eggs",
      category: "Dairy",
      price: 89,
      old: 119,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "cake1",
      name: "Chocolate Cake",
      category: "Bakery",
      price: 299,
      old: 399,
      rating: 4.6,
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const categories = [
    "Fruits",
    "Bakery",
    "Dairy",
    "Snacks",
    "Beverages",
    "Groceries",
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
    <div className="food-container">
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

        <h2>Food</h2>

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

export default Food;