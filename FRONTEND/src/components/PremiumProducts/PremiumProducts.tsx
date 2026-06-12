import "./PremiumProducts.css";
import { premiumProducts } from "../../data/premiumProducts";
import { useNavigate } from "react-router-dom";

const PremiumProducts = () => {
  const navigate = useNavigate();

  return (
    <section className="premium-products-section">
      <div className="container-custom">
        <div className="premium-heading">
          <h2>Explore the Premium Products</h2>
          <p>Exclusive styles curated for you</p>
        </div>

        <div className="premium-products-wrapper">
          <div className="premium-left">
            <div className="premium-overlay">
              <div className="premium-brand">✦ Gold</div>
              <p className="premium-tagline">
                Products you Love. Quality we Trust.
              </p>

              <button
                className="premium-btn"
                onClick={() => navigate("/fashion")}
              >
                Shop Now
              </button>
            </div>
          </div>

          <div className="premium-right">
            {premiumProducts.map((item) => (
              <div
                className="premium-small-card"
                key={item.id}
                onClick={() => navigate(item.link)}
              >
                <div className="premium-small-image">
                  <img src={item.image} alt={item.name} />
                </div>

                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumProducts;