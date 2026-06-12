import "./FeatureHighlights.css";
import { RotateCcw, Wallet, BadgeIndianRupee } from "lucide-react";

const FeatureHighlights = () => {
  return (
    <section className="feature-highlights-section">
      <div className="container-custom">
        <div className="feature-bar">
          <div className="feature-bar-item">
            <RotateCcw size={18} strokeWidth={2} />
            <span>7 Days Easy Return</span>
          </div>

          <div className="feature-bar-item">
            <Wallet size={18} strokeWidth={2} />
            <span>Cash on Delivery</span>
          </div>

          <div className="feature-bar-item">
            <BadgeIndianRupee size={18} strokeWidth={2} />
            <span>Lowest Prices</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;