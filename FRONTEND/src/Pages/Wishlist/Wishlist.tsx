import { useEffect, useMemo, useState } from "react";
import "./Wishlist.css";

type Item = {
  id: string | number;
  name: string;
  price: number;
  img: string;
};

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<Item[]>([]);

  useEffect(() => {
    let data: any = [];

    try {
      const parsed = JSON.parse(
        localStorage.getItem("wishlist") || "[]"
      );

      data = Array.isArray(parsed) ? parsed : [];
    } catch {
      data = [];
    }

    setWishlist(data);
  }, []);

  const totalValue = useMemo(() => {
    return wishlist.reduce(
      (acc, item) => acc + item.price,
      0
    );
  }, [wishlist]);

  const remove = (id: string | number) => {
    const updated = wishlist.filter(
      (item) => String(item.id) !== String(id)
    );

    setWishlist(updated);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updated)
    );

    window.dispatchEvent(new Event("storage"));
  };

  const moveToCart = (item: Item) => {
    let cart: any[] = [];

    try {
      const parsed = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );

      cart = Array.isArray(parsed) ? parsed : [];
    } catch {
      cart = [];
    }

    const exists = cart.find(
      (i: any) =>
        String(i.id) === String(item.id)
    );

    let updatedCart;

    if (exists) {
      updatedCart = cart.map((i: any) =>
        String(i.id) === String(item.id)
          ? { ...i, qty: (i.qty || 1) + 1 }
          : i
      );
    } else {
      updatedCart = [
        ...cart,
        { ...item, qty: 1 },
      ];
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    const updatedWishlist = wishlist.filter(
      (i) =>
        String(i.id) !== String(item.id)
    );

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    window.dispatchEvent(new Event("storage"));
  };

  if (
    !Array.isArray(wishlist) ||
    wishlist.length === 0
  ) {
    return (
      <div className="wishlist-empty-page">
        <div className="empty-box">
          <div className="empty-heart">💜</div>

          <h1>Your Wishlist is Empty</h1>

          <p>
            Save your favorite products here
            and shop them later anytime.
          </p>

          <button>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      {/* HERO */}
      <section className="wishlist-hero">
        <div className="wishlist-left">
          <span className="wishlist-badge">
            Premium Wishlist
          </span>

          <h1>Saved Items & Favorites</h1>

          <p>
            Track your favorite products,
            monitor prices, and move items
            directly to cart with one click.
          </p>

          <div className="wishlist-buttons">
            <button className="primary-btn">
              Continue Shopping
            </button>

            <button className="secondary-btn">
              Share Wishlist
            </button>
          </div>
        </div>

        <div className="wishlist-right">
          <div className="wishlist-top">
            <span>Wishlist Collection</span>
            <span>•••• 2026</span>
          </div>

          <div className="wishlist-total">
            ₹{totalValue.toLocaleString()}
          </div>

          <div className="wishlist-bottom">
            <div>
              <small>Saved Items</small>
              <h3>{wishlist.length}</h3>
            </div>

            <div>
              <small>Premium Picks</small>
              <h3>Active</h3>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="wishlist-stats">
        <div className="stat-card">
          <div className="stat-icon purple">
            💜
          </div>

          <div>
            <span>Total Wishlist</span>
            <h3>{wishlist.length}</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon blue">
            🛒
          </div>

          <div>
            <span>Ready To Buy</span>
            <h3>{wishlist.length}</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            💰
          </div>

          <div>
            <span>Total Value</span>
            <h3>
              ₹{totalValue.toLocaleString()}
            </h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            ⚡
          </div>

          <div>
            <span>Deals Active</span>
            <h3>Live</h3>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="wishlist-grid">
        {wishlist.map((item) => (
          <div
            className="wishlist-card"
            key={item.id}
          >
            {/* LEFT */}
            <div className="wishlist-content">
              <div className="img-wrapper">
                <img
                  src={item.img}
                  alt={item.name}
                />

                <span className="discount">
                  20% OFF
                </span>
              </div>

              <div className="product-info">
                <div className="tags">
                  <span>Premium</span>
                  <span>Trending</span>
                </div>

                <h3>{item.name}</h3>

                <div className="price-row">
                  <h2>
                    ₹
                    {item.price.toLocaleString()}
                  </h2>

                  <span className="old-price">
                    ₹
                    {(
                      item.price + 500
                    ).toLocaleString()}
                  </span>
                </div>

                <div className="stock-row">
                  <span className="status">
                    In Stock
                  </span>

                  <span className="rating">
                    ⭐ 4.8
                  </span>
                </div>

                <div className="features">
                  <span>
                    🚚 Free Delivery
                  </span>

                  <span>
                    🔁 7 Days Return
                  </span>

                  <span>
                    🔒 Secure Checkout
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="actions">
              <button
                className="remove-btn"
                onClick={() =>
                  remove(item.id)
                }
              >
                Remove
              </button>

              <button
                className="cart-btn"
                onClick={() =>
                  moveToCart(item)
                }
              >
                Move To Cart
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Wishlist;