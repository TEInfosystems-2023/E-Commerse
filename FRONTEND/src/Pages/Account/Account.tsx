import "./Account.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

/* SAFE PARSE */

const safeParse = (
  key: string,
  fallback: any
) => {

  try {

    const data =
      localStorage.getItem(key);

    return data
      ? JSON.parse(data)
      : fallback;

  } catch {

    return fallback;
  }
};

const Account = () => {

  const navigate =
    useNavigate();

  /* USER DATA */

  const [user, setUser] =
    useState<any>({});

  const [orders, setOrders] =
    useState<any[]>([]);

  const [payments, setPayments] =
    useState<any[]>([]);

  const [wishlist, setWishlist] =
    useState<any[]>([]);

  const [showModal, setShowModal] =
    useState(false);

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  /* LOAD */

  useEffect(() => {

    const userData =
      safeParse("user", {});

    const orderData =
      safeParse("orders", []);

    const paymentData =
      safeParse("payments", []);

    const wishlistData =
      safeParse("wishlist", []);

    setUser(userData);

    setOrders(orderData);

    setPayments(paymentData);

    setWishlist(wishlistData);

    setName(
      userData?.name || ""
    );

    setEmail(
      userData?.email || ""
    );

  }, []);

  /* SAVE PROFILE */

  const saveProfile = () => {

    const updatedUser = {
      ...user,
      name,
      email,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    setUser(updatedUser);

    setShowModal(false);

    alert(
      "Profile updated successfully"
    );
  };

  /* TOTAL */

  const totalSpent =
    payments.reduce(
      (a, i) =>
        a + (i.amount || 0),
      0
    );

  return (
    <div className="account-page">

      {/* SIDEBAR */}

      <aside className="account-sidebar">

        <div className="sidebar-profile">

          <div className="sidebar-avatar">
            {
              user?.name
                ? user.name
                    .charAt(0)
                    .toUpperCase()
                : "U"
            }
          </div>

          <h3>
            {
              user?.name ||
              "User"
            }
          </h3>

          <p>
            Premium Member
          </p>

        </div>

        <div className="sidebar-menu">

          <button>
            🏠 Dashboard
          </button>

          <button
            onClick={() =>
              navigate("/orders")
            }
          >
            📦 Orders
          </button>

          <button
            onClick={() =>
              navigate("/wishlist")
            }
          >
            ❤️ Wishlist
          </button>

          <button
            onClick={() =>
              navigate("/payments")
            }
          >
            💳 Payments
          </button>

          <button
            onClick={() =>
              navigate("/notifications")
            }
          >
            🔔 Notifications
          </button>

          <button
            onClick={() =>
              navigate("/settings")
            }
          >
            ⚙️ Settings
          </button>

          <button
            onClick={() =>
              navigate("/support")
            }
          >
            💬 Support
          </button>

        </div>

      </aside>

      {/* MAIN */}

      <main className="account-main">

        {/* HERO */}

        <section className="hero-card">

          <div className="hero-left">

            <div className="hero-avatar">
              {
                user?.name
                  ? user.name
                      .charAt(0)
                      .toUpperCase()
                  : "U"
              }
            </div>

            <div>

              <span className="member-badge">
                VERIFIED PREMIUM
              </span>

              <h1>
                {
                  user?.name ||
                  "User Name"
                }
              </h1>

              <p>
                {
                  user?.email ||
                  "user@email.com"
                }
              </p>

              <div className="hero-tags">

                <span>
                  Gold Member
                </span>

                <span>
                  Fast Delivery
                </span>

                <span>
                  Reward Eligible
                </span>

              </div>

            </div>

          </div>

          <div className="hero-actions">

            <button
              className="edit-btn"
              onClick={() =>
                setShowModal(true)
              }
            >
              Edit Profile
            </button>

            <button
              className="logout-btn"
              onClick={() => {

                localStorage.removeItem(
                  "user"
                );

                navigate("/");

                window.location.reload();
              }}
            >
              Logout
            </button>

          </div>

        </section>

        {/* ANALYTICS */}

        <section className="analytics-grid">

          <div className="analytics-card blue">

            <h3>
              {orders.length}
            </h3>

            <p>
              Total Orders
            </p>

          </div>

          <div className="analytics-card purple">

            <h3>
              ₹{totalSpent}
            </h3>

            <p>
              Total Spent
            </p>

          </div>

          <div className="analytics-card pink">

            <h3>
              {wishlist.length}
            </h3>

            <p>
              Wishlist Items
            </p>

          </div>

          <div className="analytics-card green">

            <h3>
              1250
            </h3>

            <p>
              Reward Points
            </p>

          </div>

        </section>

        {/* DASHBOARD */}

        <section className="dashboard-grid">

          {/* LEFT */}

          <div className="dashboard-left">

            {/* RECENT ORDERS */}

            <div className="dashboard-card">

              <div className="card-header">

                <h2>
                  Recent Orders
                </h2>

                <button
                  onClick={() =>
                    navigate("/orders")
                  }
                >
                  View All
                </button>

              </div>

              {orders.length === 0 ? (

                <p className="empty">
                  No orders available
                </p>

              ) : (

                orders
                  .slice(0, 3)
                  .map((o, index) => (

                    <div
                      className="order-item"
                      key={index}
                    >

                      <div className="order-icon">
                        📦
                      </div>

                      <div>

                        <h4>
                          Order #
                          {o.id ||
                            index + 1}
                        </h4>

                        <p>
                          Delivered
                        </p>

                      </div>

                      <span>
                        ₹
                        {o.total ||
                          999}
                      </span>

                    </div>

                  ))

              )}

            </div>

            {/* ACTIVITY */}

            <div className="dashboard-card">

              <div className="card-header">

                <h2>
                  Recent Activity
                </h2>

              </div>

              <div className="activity-item">

                <div className="activity-dot"></div>

                <div>

                  <h4>
                    Order Delivered
                  </h4>

                  <p>
                    Your recent order was
                    delivered successfully.
                  </p>

                </div>

              </div>

              <div className="activity-item">

                <div className="activity-dot blue-dot"></div>

                <div>

                  <h4>
                    Payment Successful
                  </h4>

                  <p>
                    Payment completed using
                    UPI.
                  </p>

                </div>

              </div>

              <div className="activity-item">

                <div className="activity-dot pink-dot"></div>

                <div>

                  <h4>
                    Wishlist Updated
                  </h4>

                  <p>
                    New product added to
                    wishlist.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="dashboard-right">

            {/* WALLET */}

            <div className="wallet-card">

              <span>
                WALLET BALANCE
              </span>

              <h2>
                ₹4,250
              </h2>

              <p>
                Cashback + rewards available
              </p>

              <button>
                Redeem Rewards
              </button>

            </div>

            {/* QUICK ACTIONS */}

            <div className="dashboard-card">

              <div className="card-header">

                <h2>
                  Quick Actions
                </h2>

              </div>

              <div className="quick-grid">

                <button
                  onClick={() =>
                    navigate("/orders")
                  }
                >
                  📦 Orders
                </button>

                <button
                  onClick={() =>
                    navigate("/gift-cards")
                  }
                >
                  🎁 Gift Cards
                </button>

                <button
                  onClick={() =>
                    navigate("/payments")
                  }
                >
                  💳 Payments
                </button>

                <button
                  onClick={() =>
                    navigate("/support")
                  }
                >
                  💬 Support
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* MODAL */}

      {showModal && (

        <div className="modal-overlay">

          <div className="profile-modal">

            <h2>
              Edit Profile
            </h2>

            <input
              placeholder="Name"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
            />

            <input
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />

            <div className="modal-actions">

              <button
                className="cancel-btn"
                onClick={() =>
                  setShowModal(false)
                }
              >
                Cancel
              </button>

              <button
                className="save-btn"
                onClick={saveProfile}
              >
                Save
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};
export default Account;