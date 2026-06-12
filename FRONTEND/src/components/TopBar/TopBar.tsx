import "./TopBar.css";
import { Link } from "react-router-dom";
import { FileText, CircleHelp, ShoppingBag } from "lucide-react";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container-custom">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span className="topbar-text">FREE Delivery</span>
            <span className="topbar-text">7 Days Easy Returns</span>
            <span className="topbar-text">Best Prices</span>
          </div>

          <div className="topbar-right">
            <Link to="/blog" className="topbar-link">
              <FileText size={18} />
              <span>Our Blog</span>
            </Link>

            <Link to="/help-center" className="topbar-link">
              <CircleHelp size={18} />
              <span>Help Center</span>
            </Link>

            <Link to="/sell-on-remart" className="topbar-link">
              <ShoppingBag size={18} />
              <span>Sell on Re-Mart</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;