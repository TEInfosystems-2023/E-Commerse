import "./TrendingOffer.css";
import { trendingItems } from "../../data/trendingOffer";
import { useNavigate } from "react-router-dom";

const TrendingOffer = () => {
  const navigate = useNavigate();

  return (
    <section className="trending-section">
      <div className="container-custom">
        <div className="trending-heading">
          <h2>Trendy Offer</h2>
        </div>

        <div className="trending-wrapper">
          <div className="trending-left">
            <span className="trending-left-mini">Up to</span>
            <h1>35% OFF</h1>
            <p>on first order</p>
            <strong>*Only on App</strong>

            <button
              className="trending-btn"
              onClick={() => navigate("/fashion")}
            >
              Shop Now
            </button>

            
          </div>

          <div className="trending-right">
            <span className="float-icon sparkle-1">✦</span>
            <span className="float-icon sparkle-2">✦</span>
            <span className="float-icon coin-1">₹</span>
            <span className="float-icon coin-2">₹</span>
            <span className="float-icon heart-1">❤</span>
            <span className="float-icon heart-2">❤</span>

            {trendingItems.map((item) => (
              <div
                className="trending-card"
                key={item.id}
                onClick={() => navigate(item.link)}
              >
                <div className="trending-img">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="trending-label">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingOffer;