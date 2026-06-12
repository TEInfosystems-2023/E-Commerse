import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "../../data/products";
import { isLoggedIn } from "../../utils/authUtils";
import AuthModal from "../../components/auth/AuthModal";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [size, setSize] = useState("XS");
  const [fav, setFav] = useState(false);
  const [toast, setToast] = useState("");
  const [showAuth, setShowAuth] = useState(false);
  const [loadingBuy, setLoadingBuy] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // ✅ SAFE PRODUCT MATCH
  const product = products.find((p) => String(p.id) === String(id));

  if (!product) return <h2>Product Not Found</h2>;

  // ✅ MULTIPLE IMAGES
  const productImages = [
    product.img,
    product.img,
    product.img,
  ];

  // ✅ SHOW SIZE ONLY FOR FASHION
  const hasSizes =
    product.category === "fashion" ||
    product.category === "clothing";

  // ✅ LOAD WISHLIST
  useEffect(() => {
    let existing: any[] = [];

    try {
      const data = JSON.parse(localStorage.getItem("wishlist") || "[]");
      existing = Array.isArray(data) ? data : [];
    } catch {
      existing = [];
    }

    const found = existing.find((item: any) => item.id === product.id);

    if (found) setFav(true);
  }, [product]);

  // ✅ ADD TO CART
  const handleCart = () => {
    try {
      let existing: any[] = [];

      try {
        const data = JSON.parse(localStorage.getItem("cart") || "[]");
        existing = Array.isArray(data) ? data : [];
      } catch {
        existing = [];
      }

      const found = existing.find((item: any) => item.id === product.id);

      let updated;

      if (found) {
        updated = existing.map((item: any) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        updated = [
          ...existing,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            size,
            qty: 1,
          },
        ];
      }

      localStorage.setItem("cart", JSON.stringify(updated));

      window.dispatchEvent(new Event("storage"));
    } catch (error) {
      console.error("Cart error:", error);

      localStorage.setItem("cart", "[]");
    }
  };

  // ✅ WISHLIST
  const toggleWishlist = () => {
    try {
      let existing: any[] = [];

      try {
        const data = JSON.parse(localStorage.getItem("wishlist") || "[]");
        existing = Array.isArray(data) ? data : [];
      } catch {
        existing = [];
      }

      const found = existing.find((item: any) => item.id === product.id);

      let updated;

      if (found) {
        updated = existing.filter(
          (item: any) => item.id !== product.id
        );
      } else {
        updated = [
          ...existing,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
          },
        ];
      }

      localStorage.setItem("wishlist", JSON.stringify(updated));

      setFav(!found);

      setToast(
        found
          ? "Removed from wishlist"
          : "Added to wishlist ❤️"
      );

      setTimeout(() => setToast(""), 2000);

      window.dispatchEvent(new Event("storage"));
    } catch (error) {
      console.error("Wishlist error:", error);
    }
  };

  // ✅ BUY NOW
  const handleBuyNow = () => {
    if (!isLoggedIn()) {
      setShowAuth(true);
      return;
    }

    setLoadingBuy(true);

    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      size,
      qty: 1,
    };

    localStorage.setItem(
      "buyNowItem",
      JSON.stringify(item)
    );

    setToast("Redirecting to checkout...");

    setTimeout(() => {
      setLoadingBuy(false);
      setToast("");
      navigate("/checkout");
    }, 800);
  };

  return (
    <div className="product-page">

      {/* TOP HEADER */}
      <div className="product-topbar">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ←
        </button>

        <h2>Product Details</h2>

        <div className="top-icons">

          <button
            className={`wishlist-btn ${
              fav ? "active" : ""
            }`}
            onClick={toggleWishlist}
          >
            {fav ? "❤️" : "♡"}
          </button>

          <button className="share-btn">
            ↗
          </button>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="product-container">

        {/* IMAGE SECTION */}
        <div className="image-section">

          {/* THUMBNAILS */}
          <div className="thumbnail-list">

            {productImages.map((img, index) => (
              <div
                key={index}
                className={`thumbnail ${
                  selectedImage === index
                    ? "active-thumb"
                    : ""
                }`}
                onClick={() =>
                  setSelectedImage(index)
                }
              >
                <img src={img} alt="" />
              </div>
            ))}

          </div>

          {/* MAIN IMAGE */}
          <div className="main-image-card">

            <div className="discount-badge">
              58% OFF
            </div>

            <img
              src={productImages[selectedImage]}
              alt={product.name}
              className="main-image"
            />

            <div className="floating-icons">

              <button
                className={`float-icon ${
                  fav ? "active" : ""
                }`}
                onClick={toggleWishlist}
              >
                {fav ? "❤️" : "♡"}
              </button>

              <button className="float-icon">
                ↗
              </button>

            </div>

          </div>

        </div>

        {/* DETAILS SECTION */}
        <div className="details-section">

          {/* RATING */}
          <div className="rating-row">

            <span className="rating-badge">
              ★ 4.5
            </span>

            <span className="rating-text">
              5.3k Reviews
            </span>

            <span className="stock">
              In Stock
            </span>

          </div>

          {/* PRODUCT TITLE */}
          <h1 className="product-title">
            {product.name}
          </h1>

          {/* BRAND */}
          <p className="brand-name">
            Visit Brand Store
          </p>

          {/* PRICE */}
          <div className="price-row">

            <span className="discount-percent">
              58% OFF
            </span>

            <span className="old-price">
              ₹2,499
            </span>

            <span className="new-price">
              ₹{product.price}
            </span>

          </div>

          {/* DELIVERY */}
          <div className="delivery-chip">
            Deliver to:{" "}
            {localStorage.getItem("userCity") ||
              "Select Location"}
          </div>

          {/* DESCRIPTION */}
          <p className="product-desc">
            Premium quality product with modern
            comfort, lightweight feel and stylish
            premium finish for daily lifestyle use.
          </p>

          {/* COLOR */}
          <div className="section-block">

            <h3>
              Selected Color:
              <span> Black / Grey</span>
            </h3>

            <div className="color-preview">

              {productImages.map((img, index) => (
                <div
                  key={index}
                  className={`color-box ${
                    selectedImage === index
                      ? "active-color"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedImage(index)
                  }
                >
                  <img src={img} alt="" />
                </div>
              ))}

            </div>

          </div>

          {/* SIZE */}
          {hasSizes && (
            <div className="section-block">

              <div className="size-header">
                <h3>Select Size</h3>

                <span className="size-chart">
                  Size Chart
                </span>
              </div>

              <div className="sizes">

                {["XS", "S", "M", "L", "XL"].map(
                  (s) => (
                    <button
                      key={s}
                      className={
                        size === s
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        setSize(s)
                      }
                    >
                      {s}
                    </button>
                  )
                )}

              </div>

            </div>
          )}

          {/* OFFERS */}
          <div className="offers-card">

            <h3>Available Offers</h3>

            <div className="offer-item">
              💳 Bank Offer - 10% Instant Discount
            </div>

            <div className="offer-item">
              🚚 Free Delivery Available
            </div>

            <div className="offer-item">
              🔥 Extra Cashback on UPI Payment
            </div>

          </div>

          {/* DELIVERY BOX */}
          <div className="delivery-box">

            <h3>Delivery Details</h3>

            <div className="delivery-item">
              📍 757031 Deliver by Friday
            </div>

            <div className="delivery-item">
              💵 Cash on Delivery Available
            </div>

            <div className="delivery-item">
              🛡️ Secure Premium Packaging
            </div>

          </div>

          {/* BUTTONS */}
          <div className="action-buttons">

            <button
              className="cart-btn"
              onClick={() => {
                if (!isLoggedIn()) {
                  setShowAuth(true);
                  return;
                }

                handleCart();

                setToast("Added to cart 🛒");

                setTimeout(() => {
                  setToast("");
                  navigate("/cart");
                }, 800);
              }}
            >
              Add To Cart
            </button>

            <button
              className="buy-btn"
              onClick={handleBuyNow}
              disabled={loadingBuy}
            >
              {loadingBuy
                ? "Processing..."
                : "Buy Now"}
            </button>

          </div>

        </div>

      </div>

      {/* MOBILE STICKY BAR */}
      <div className="mobile-sticky-bar">

        <button
          className="sticky-cart"
          onClick={() => {
            if (!isLoggedIn()) {
              setShowAuth(true);
              return;
            }

            handleCart();

            setToast("Added to cart 🛒");

            setTimeout(() => {
              setToast("");
              navigate("/cart");
            }, 800);
          }}
        >
          Add To Cart
        </button>

        <button
          className="sticky-buy"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>

      </div>

      {/* TOAST */}
      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}

      {/* AUTH MODAL */}
      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
        />
      )}

    </div>
  );
};

export default ProductDetails;