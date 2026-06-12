import { useEffect, useMemo, useState } from "react";
import "./Cart.css";

type Item = {
  id: string;
  name: string;
  price: number;
  img: string;
  qty: number;
};

const Cart = () => {
  const [cart, setCart] = useState<Item[]>([]);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    setCart(data);
  }, []);

  const updateCart = (updated: Item[]) => {
    setCart(updated);

    localStorage.setItem(
      "cart",
      JSON.stringify(updated)
    );

    window.dispatchEvent(new Event("storage"));
  };

  const increase = (id: string) => {
    updateCart(
      cart.map((i) =>
        i.id === id
          ? { ...i, qty: i.qty + 1 }
          : i
      )
    );
  };

  const decrease = (id: string) => {
    updateCart(
      cart.map((i) =>
        i.id === id && i.qty > 1
          ? { ...i, qty: i.qty - 1 }
          : i
      )
    );
  };

  const remove = (id: string) => {
    updateCart(
      cart.filter((i) => i.id !== id)
    );
  };

  const subtotal = useMemo(() => {
    return cart.reduce(
      (a, i) => a + i.price * i.qty,
      0
    );
  }, [cart]);

  const shipping = subtotal > 999 ? 0 : 49;

  const discount = Math.floor(
    subtotal * 0.12
  );

  const total =
    subtotal + shipping - discount;

  if (cart.length === 0) {
    return (
      <div className="cart-empty">

        <div className="empty-box">

          <h1>🛒 Your Cart is Empty</h1>

          <p>
            Add products and continue
            your shopping experience.
          </p>

          <button>
            Continue Shopping
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="cart-page">

      {/* TOP */}
      <section className="cart-header">

        <div>

          <span className="mini-tag">
            Premium Marketplace
          </span>

          <h1>
            Shopping Cart
          </h1>

          <p>
            Manage products, quantities,
            offers and secure checkout.
          </p>

        </div>

        <div className="header-stats">

          <div className="stat-card">

            <span>Total Items</span>

            <h3>{cart.length}</h3>

          </div>

          <div className="stat-card">

            <span>Total Amount</span>

            <h3>
              ₹{total}
            </h3>

          </div>

        </div>

      </section>

      {/* FREE SHIPPING */}
      <section className="shipping-banner">

        <div>
          🚚 Free delivery on orders above ₹999
        </div>

        <span>
          Estimated Delivery: Tomorrow
        </span>

      </section>

      {/* MAIN */}
      <div className="cart-layout">

        {/* PRODUCTS */}
        <div className="products-section">

          {cart.map((item) => (

            <div
              className="product-card"
              key={item.id}
            >

              {/* IMAGE */}
              <div className="product-image">

                <img
                  src={item.img}
                  alt={item.name}
                />

                <span className="discount-badge">
                  20% OFF
                </span>

              </div>

              {/* DETAILS */}
              <div className="product-details">

                <div className="top-row">

                  <div>

                    <h2>
                      {item.name}
                    </h2>

                    <div className="rating">
                      ⭐ 4.8 • Best Seller
                    </div>

                  </div>

                  <div className="price-box">

                    <h3>
                      ₹
                      {item.price * item.qty}
                    </h3>

                    <span>
                      ₹
                      {item.price + 600}
                    </span>

                  </div>

                </div>

                <div className="feature-tags">

                  <span>
                    Fast Delivery
                  </span>

                  <span>
                    Secure Packaging
                  </span>

                  <span>
                    Easy Returns
                  </span>

                </div>

                <div className="bottom-row">

                  <div className="qty-controller">

                    <button
                      onClick={() =>
                        decrease(item.id)
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.qty}
                    </span>

                    <button
                      onClick={() =>
                        increase(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                  <div className="actions">

                    <button>
                      Save For Later
                    </button>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        remove(item.id)
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* SUMMARY */}
        <div className="summary-section">

          <div className="summary-card">

            <h2>
              Order Summary
            </h2>

            <div className="summary-line">

              <span>
                Subtotal
              </span>

              <span>
                ₹{subtotal}
              </span>

            </div>

            <div className="summary-line">

              <span>
                Shipping
              </span>

              <span>
                {shipping === 0
                  ? "Free"
                  : `₹${shipping}`}
              </span>

            </div>

            <div className="summary-line green">

              <span>
                Discount
              </span>

              <span>
                -₹{discount}
              </span>

            </div>

            <div className="summary-total">

              <span>Total</span>

              <h3>
                ₹{total}
              </h3>

            </div>

            <button className="checkout-btn">
              Proceed To Checkout
            </button>

            <div className="secure-info">
              🔒 100% Secure Payments
            </div>

          </div>

          {/* COUPON */}
          <div className="coupon-card">

            <h3>
              Apply Coupon
            </h3>

            <div className="coupon-box">

              <input
                placeholder="Enter coupon code"
              />

              <button>
                Apply
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Cart;