import "./HeaderPages.css";
import { useLocation } from "react-router-dom";

const HeaderPages = () => {
  const location = useLocation();

  return (
    <section className="header-pages-section">
      <div className="container-custom">

        {/* BLOG PAGE */}

        {location.pathname === "/blog" && (
          <div className="header-page-content">
            <h1>Our Blog</h1>

            <p>
              Discover the latest fashion trends, beauty tips,
              electronics updates and shopping guides.
            </p>

            <div className="header-page-grid">

              <div className="header-page-card">
                <img
                  src="/images/blog-fashion.jpg"
                  alt="Fashion Blog"
                />
                <h3>Top Fashion Trends 2026</h3>
              </div>

              <div className="header-page-card">
                <img
                  src="/images/blog-makeup.webp"
                  alt="Beauty Blog"
                />
                <h3>Best Makeup Products</h3>
              </div>

              <div className="header-page-card">
                <img
                  src="/images/blog-electronics.jpg"
                  alt="Electronics Blog"
                />
                <h3>Latest Gadgets Collection</h3>
              </div>

            </div>
          </div>
        )}

        {/* HELP CENTER */}

        {location.pathname === "/help-center" && (
          <div className="header-page-content">
            <h1>Help Center</h1>

            <p>
              We are here to help you with your orders,
              payments, delivery and returns.
            </p>

            <div className="help-boxes">

              <div className="help-box">
                <h3>Track Order</h3>
                <p>Track your current orders easily.</p>
              </div>

              <div className="help-box">
                <h3>Return Policy</h3>
                <p>Easy 7 days return available.</p>
              </div>

              <div className="help-box">
                <h3>Payment Support</h3>
                <p>Payment failed? We can help.</p>
              </div>

              <div className="help-box">
                <h3>Contact Support</h3>
                <p>Email or chat with our support team.</p>
              </div>

            </div>
          </div>
        )}

        {/* SELL ON REMART */}

        {location.pathname === "/sell-on-remart" && (
          <div className="header-page-content">
            <h1>Sell on Re-Mart</h1>

            <p>
              Start your online business with Re-Mart
              and reach thousands of customers.
            </p>

            <div className="sell-banner">

              <div className="sell-content">
                <h2>Become a Seller Today</h2>

                <ul>
                  <li>✔ Zero setup cost</li>
                  <li>✔ Easy product upload</li>
                  <li>✔ Fast payments</li>
                  <li>✔ Nationwide delivery</li>
                </ul>

                <button>Start Selling</button>
              </div>

              <img
                src="/images/sell-banner.jpg"
                alt="Sell on Re-Mart"
              />

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default HeaderPages;