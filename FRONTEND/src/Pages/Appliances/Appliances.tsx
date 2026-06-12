import "./Appliances.css";
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

const Appliances = () => {
  const navigate = useNavigate();

  const products: Product[] = [
    {
      id: "fridge1",
      name: "Double Door Refrigerator",
      category: "Refrigerators",
      price: 28999,
      old: 34999,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "wm1",
      name: "Front Load Washing Machine",
      category: "Washing Machines",
      price: 24999,
      old: 31999,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "microwave1",
      name: "Convection Microwave Oven",
      category: "Microwaves",
      price: 8999,
      old: 11999,
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ac1",
      name: "Inverter Air Conditioner",
      category: "Air Conditioners",
      price: 35999,
      old: 42999,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1631545806526-39db50dbe2f3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "mixer1",
      name: "Mixer Grinder",
      category: "Kitchen Appliances",
      price: 3499,
      old: 4999,
      rating: 4.1,
      img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "vacuum1",
      name: "Vacuum Cleaner",
      category: "Cleaning Appliances",
      price: 6999,
      old: 9999,
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "iron1",
      name: "Steam Iron",
      category: "Home Appliances",
      price: 1499,
      old: 2299,
      rating: 4.0,
      img: "https://images.unsplash.com/photo-1594033708892-2f6b8e5b0a2e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "purifier1",
      name: "Water Purifier",
      category: "Kitchen Appliances",
      price: 10999,
      old: 14999,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1626806819282-2c1dc7f8f5b3?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const categories = [
    "Refrigerators",
    "Washing Machines",
    "Microwaves",
    "Air Conditioners",
    "Kitchen Appliances",
    "Cleaning Appliances",
    "Home Appliances",
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
    <div className="appliances-container">
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

        <h2>Appliances</h2>

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

export default Appliances;