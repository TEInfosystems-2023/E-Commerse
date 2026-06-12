import "./Toys.css";
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

const Toys = () => {
  const navigate = useNavigate();

  const products: Product[] = [
    {
      id: "teddy1",
      name: "Soft Teddy Bear",
      category: "Soft Toys",
      price: 499,
      old: 799,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "car1",
      name: "Remote Control Car",
      category: "RC Toys",
      price: 999,
      old: 1499,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "blocks1",
      name: "Building Blocks Set",
      category: "Educational Toys",
      price: 699,
      old: 1099,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "doll1",
      name: "Fashion Doll",
      category: "Dolls",
      price: 599,
      old: 899,
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1608889175118-7f8f6d72d8e0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "puzzle1",
      name: "Kids Puzzle Game",
      category: "Educational Toys",
      price: 349,
      old: 599,
      rating: 4.1,
      img: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "robot1",
      name: "Talking Robot Toy",
      category: "Electronic Toys",
      price: 1299,
      old: 1799,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "train1",
      name: "Toy Train Set",
      category: "Vehicles",
      price: 899,
      old: 1399,
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "kitchen1",
      name: "Mini Kitchen Set",
      category: "Pretend Play",
      price: 799,
      old: 1199,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const categories = [
    "Soft Toys",
    "RC Toys",
    "Educational Toys",
    "Dolls",
    "Electronic Toys",
    "Vehicles",
    "Pretend Play",
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
    <div className="toys-container">
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

        <h2>Toys</h2>

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

export default Toys;