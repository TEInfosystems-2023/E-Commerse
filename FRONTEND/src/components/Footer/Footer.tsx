import "./Footer.css";
import { useState } from "react";
import { Truck, Shield, RotateCcw, Headphones } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setMessage("❌ Please enter a valid email");
      return;
    }

    setMessage("✅ Subscribed successfully!");
    setEmail("");

    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <footer className="footer">
      {/* TRUST BADGES */}
      <div className="footer-badges">
        <div className="container-custom">
          <div className="badges-grid">
            <div className="badge-item">
              <Truck size={24} />
              <div>
                <h4>Free Shipping</h4>
                <p>On orders above ₹499</p>
              </div>
            </div>
            <div className="badge-item">
              <RotateCcw size={24} />
              <div>
                <h4>Easy Returns</h4>
                <p>7 days return policy</p>
              </div>
            </div>
            <div className="badge-item">
              <Shield size={24} />
              <div>
                <h4>Secure Payment</h4>
                <p>100% secure transactions</p>
              </div>
            </div>
            <div className="badge-item">
              <Headphones size={24} />
              <div>
                <h4>24/7 Support</h4>
                <p>Dedicated customer care</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="container-custom">
          {/* BRAND & NEWSLETTER */}
          <div className="footer-brand-section">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="footer-logo-icon">D</span>
                <span className="footer-logo-text">MART</span>
              </div>

              <p className="footer-description">
                Your one-stop destination for fashion, electronics, beauty,
                appliances, and everything in between. Quality products at the
                best prices.
              </p>

              <div className="footer-socials">
                <a href="#" title="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" title="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" title="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" title="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <div className="footer-newsletter">
              <h3>Newsletter</h3>
              <p>Subscribe to get special offers and news directly to your inbox.</p>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
              {message && <p className="newsletter-message">{message}</p>}
            </div>
          </div>

          {/* LINKS GRID */}
          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>Shop</h4>
              <ul>
                <li><a href="/fashion">Fashion</a></li>
                <li><a href="/electronics">Electronics</a></li>
                <li><a href="/beauty">Beauty</a></li>
                <li><a href="/appliances">Appliances</a></li>
                <li><a href="/furniture">Furniture</a></li>
                <li><a href="/books">Books</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Customer Service</h4>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Track Order</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Size Guide</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>About</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Sellers</a></li>
                <li><a href="#">Affiliates</a></li>
                <li><a href="#">Investor</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Policies</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Return Policy</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Grievance</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Get the App</h4>
              <div className="app-buttons">
                <a href="#" className="app-btn google">
                  <FaGooglePlay /> Play Store
                </a>
                <a href="#" className="app-btn apple">
                  <FaApple /> App Store
                </a>
              </div>

              <h4 style={{ marginTop: "20px" }}>We Accept</h4>
              <div className="payment-methods">
                <span>💳 Credit/Debit</span>
                <span>📱 UPI</span>
                <span>🏦 Net Banking</span>
                <span>💰 Wallet</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="container-custom">
          <div className="bottom-content">
            <p>&copy; 2026 D-MART. All Rights Reserved.</p>
            <div className="bottom-links">
              <a href="#">Privacy</a>
              <span>•</span>
              <a href="#">Terms</a>
              <span>•</span>
              <a href="#">Cookies</a>
              <span>•</span>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
