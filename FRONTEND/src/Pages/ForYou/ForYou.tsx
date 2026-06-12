import "../Fashion/Fashion.css";
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

const ForYou = () => {
  const navigate = useNavigate();

  // 🔥 8 PRODUCTS (FIXED)
  const products: Product[] = [
    {
      id: "shirt1",
      name: "Men Casual Shirt",
      category: "Clothing",
      price: 999,
      old: 1499,
      rating: 4.2,
      img: "https://m.media-amazon.com/images/I/71-3HjGNDUL._UY1100_.jpg",
    },
    {
      id: "tshirt1",
      name: "Printed T-Shirt",
      category: "Clothing",
      price: 599,
      old: 999,
      rating: 4.3,
      img: "https://m.media-amazon.com/images/I/61-jBuhtgZL._UY1100_.jpg",
    },
    {
      id: "jeans1",
      name: "Denim Jeans",
      category: "Clothing",
      price: 1299,
      old: 1999,
      rating: 4.4,
      img: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
    },
    {
      id: "jacket1",
      name: "Winter Jacket",
      category: "Clothing",
      price: 1999,
      old: 2999,
      rating: 4.5,
      img: "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg",
    },
    {
      id: "watch1",
      name: "Smart Watch",
      category: "Gadgets",
      price: 1999,
      old: 2999,
      rating: 4.3,
      img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
    },
    {
      id: "headphone1",
      name: "Wireless Headphones",
      category: "Gadgets",
      price: 1499,
      old: 2499,
      rating: 4.4,
      img: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
    },
    {
      id: "shoes1",
      name: "Sneakers",
      category: "Shoes",
      price: 1799,
      old: 2599,
      rating: 4.2,
      img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    },
    {
      id: "bag1",
      name: "Backpack",
      category: "Accessories",
      price: 899,
      old: 1399,
      rating: 4.1,
      img: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg",
    },
  ];

  const categories = ["Clothing", "Gadgets", "Shoes", "Accessories"];

  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortType>("relevance");

  const toggle = (cat: string) => {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filtered = products.filter((p) => {
    const matchCat =
      selected.length === 0 || selected.includes(p.category);
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const sorted = [...filtered];

  if (sort === "low") sorted.sort((a, b) => a.price - b.price);
  if (sort === "high") sorted.sort((a, b) => b.price - a.price);
  if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);

  return (
    <div className="fashion-container">

      {/* SIDEBAR */}
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

      {/* MAIN */}
      <main className="main">

        <div className="sort-bar">
          <span>Sort by</span>

          <button onClick={() => setSort("relevance")}>Relevance</button>
          <button onClick={() => setSort("low")}>Price Low</button>
          <button onClick={() => setSort("high")}>Price High</button>
          <button onClick={() => setSort("rating")}>Rating</button>
        </div>

        <h2>For You</h2>

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

export default ForYou;