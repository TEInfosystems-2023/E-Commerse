import "./Header.css";
import { Search, UserCircle2, ShoppingCart, Heart } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthModal from "../auth/AuthModal";
import { isLoggedIn } from "../../utils/authUtils";

const Header = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const navigate = useNavigate();
  const profileRef = useRef<HTMLDivElement>(null);

  // USER SAFE
  let user: any = {};
  try {
    user = JSON.parse(localStorage.getItem("user") || "{}");
  } catch {}

  // LOAD COUNTS
  useEffect(() => {
    const updateCounts = () => {
      try {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

        setCartCount(Array.isArray(cart) ? cart.length : 0);
        setWishlistCount(Array.isArray(wishlist) ? wishlist.length : 0);
      } catch {
        setCartCount(0);
        setWishlistCount(0);
      }
    };

    updateCounts();
    window.addEventListener("storage", updateCounts);
    return () => window.removeEventListener("storage", updateCounts);
  }, []);

  // CLOSE DROPDOWN
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔥 FINAL SCROLL FIX (STABLE)
  useEffect(() => {
    document.body.style.overflow = showAuth ? "hidden" : "auto";
  }, [showAuth]);

  // LOGOUT
  const handleLogout = () => {
    if (!confirm("Logout from your account?")) return;
    localStorage.removeItem("user");
    setOpenProfile(false);
    navigate("/");
  };

  return (
    <header className="main-header">
      <div className="container-custom">
        <div className="main-header-wrapper">

          {/* LOGO */}
          <div className="header-logo" onClick={() => navigate("/")}>
            <span className="logo-icon">D</span>
            <span className="logo-text">MART</span>
          </div>

          {/* SEARCH */}
          <div className="header-search">
            <form
              className="header-search-form"
              onSubmit={(e) => {
                e.preventDefault();
                const query = searchQuery.trim();
                if (!query) return;
                navigate(`/search?q=${encodeURIComponent(query)}`);
              }}
            >
              <Search size={20} className="search-icon" />
              <input
                placeholder="Search for Brands & Products"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-submit-btn" type="submit">
                Search
              </button>
            </form>
          </div>

          {/* ACTIONS */}
          <div className="header-actions">

            {/* PROFILE */}
            <div ref={profileRef} className="header-action-item profile-wrapper">

              <div
                className="profile-trigger"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenProfile((prev) => !prev);
                }}
              >
                <UserCircle2 size={28} />
                <span>Profile</span>
              </div>

              {openProfile && (
                <div className="profile-dropdown">

                  {/* LOGIN / USER */}
                  {!isLoggedIn() ? (
                    <div className="profile-top">
                      <h4>Welcome</h4>
                      <p>Login to access your account</p>

                      <button
                        className="login-btn"
                        onClick={() => {
                          setOpenProfile(false);   // close dropdown
                          setShowAuth(true);       // open modal
                        }}
                      >
                        LOGIN / SIGNUP
                      </button>
                    </div>
                  ) : (
                    <div className="profile-top">
                      <h4>{user?.name || "User"}</h4>
                      <p>{user?.email || ""}</p>

                      <button className="logout-btn" onClick={handleLogout}>
                        Logout
                      </button>
                    </div>
                  )}

                  {/* MAIN MENU */}
                  <div className="profile-section">
                    <span onClick={() => {navigate("/orders"); setOpenProfile(false);}}>Orders</span>
                    <span onClick={() => {navigate("/payments"); setOpenProfile(false);}}>Payments</span>
                    <span onClick={() => {navigate("/giftcards"); setOpenProfile(false);}}>Gift Cards</span>
                    <span onClick={() => {navigate("/notifications"); setOpenProfile(false);}}>Notifications</span>
                    <span onClick={() => {navigate("/settings"); setOpenProfile(false);}}>Settings</span>
                  </div>

                  {/* SUPPORT */}
                  <div className="profile-section">
                    {/* <span onClick={() => {navigate("/help"); setOpenProfile(false);}}>Help Center</span> */}
                    <span onClick={() => {navigate("/support"); setOpenProfile(false);}}>24x7 Support</span>
                  </div>

                  {/* ACCOUNT */}
                  <div className="profile-section">
                    <span onClick={() => {navigate("/account"); setOpenProfile(false);}}>
                      View Full Account
                    </span>
                  </div>

                </div>
              )}
            </div>

            {/* WISHLIST */}
            <div
              className="header-action-item"
              onClick={() => {
                if (!isLoggedIn()) return setShowAuth(true);
                navigate("/wishlist");
              }}
            >
              <div className="header-icon-wrap">
                <Heart size={26} />
                {wishlistCount > 0 && (
                  <span className="wishlist-badge">{wishlistCount}</span>
                )}
              </div>
              <span>Wishlist</span>
            </div>

            {/* CART */}
            <div
              className="header-action-item"
              onClick={() => {
                if (!isLoggedIn()) return setShowAuth(true);
                navigate("/cart");
              }}
            >
              <div className="header-icon-wrap">
                <ShoppingCart size={26} />
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </div>
              <span>My Cart</span>
            </div>

            {/* DOWNLOAD */}
            <button className="download-app-btn">
              Download App
            </button>

          </div>
        </div>
      </div>

      {/* AUTH MODAL */}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </header>
  );
};

export default Header;