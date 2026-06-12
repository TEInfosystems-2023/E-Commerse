import { useState } from "react";
import "./ProfileMenu.css";
import { UserCircle2, ChevronDown, Package, Heart, Gift, PhoneCall, CreditCard, MapPin, TicketPercent } from "lucide-react";

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="profile-menu-wrapper"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`header-action-item profile-trigger ${open ? "active" : ""}`}
      >
        <div className="profile-trigger-top">
          <UserCircle2 size={30} />
          <ChevronDown size={14} className={`profile-chevron ${open ? "rotate" : ""}`} />
        </div>
        <span>Login</span>
      </button>

      {open && (
        <div className="profile-dropdown">
          <div className="profile-dropdown-top">
            <div>
              <h4>Welcome</h4>
              <p>To access account and manage orders</p>
            </div>

            <button type="button" className="profile-login-btn">
              LOGIN / SIGNUP
            </button>
          </div>

          <div className="profile-divider" />

          <div className="profile-links">
            <a href="#" className="profile-link">
              <Package size={16} />
              <span>Orders</span>
            </a>

            <a href="#" className="profile-link">
              <Heart size={16} />
              <span>Wishlist</span>
            </a>

            <a href="#" className="profile-link">
              <Gift size={16} />
              <span>Gift Cards</span>
            </a>

            <a href="#" className="profile-link">
              <PhoneCall size={16} />
              <span>Contact Us</span>
            </a>
          </div>

          <div className="profile-divider" />

          <div className="profile-links">
            <a href="#" className="profile-link">
              <CreditCard size={16} />
              <span>Myntra Credit</span>
            </a>

            <a href="#" className="profile-link">
              <TicketPercent size={16} />
              <span>Coupons</span>
            </a>

            <a href="#" className="profile-link">
              <CreditCard size={16} />
              <span>Saved Cards</span>
            </a>

            <a href="#" className="profile-link">
              <CreditCard size={16} />
              <span>Saved UPI</span>
            </a>

            <a href="#" className="profile-link">
              <MapPin size={16} />
              <span>Saved Addresses</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;