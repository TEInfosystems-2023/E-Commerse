import "./Checkout.css";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type BuyItem = {
  id: string | number;
  name: string;
  price: number;
  img: string;
  size?: string;
  qty: number;
};

const Checkout = () => {
  const navigate = useNavigate();

  const [item, setItem] =
    useState<BuyItem | null>(null);

  /* ADDRESS */
  const [editing, setEditing] =
    useState(false);

  const [city, setCity] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [addrErr, setAddrErr] =
    useState("");

  /* PAYMENT */
  const [payment, setPayment] =
    useState<"cod" | "upi" | "card">(
      "cod"
    );

  const [upiId, setUpiId] =
    useState("");

  const [card, setCard] = useState({
    number: "",
    name: "",
    exp: "",
    cvv: "",
  });

  const [payErr, setPayErr] =
    useState("");

  /* COUPON */
  const [coupon, setCoupon] =
    useState("");

  const [discount, setDiscount] =
    useState(0);

  const [couponMsg, setCouponMsg] =
    useState("");

  const [placing, setPlacing] =
    useState(false);

  useEffect(() => {
    const data =
      localStorage.getItem(
        "buyNowItem"
      );

    if (data) {
      setItem(JSON.parse(data));
    }

    setCity(
      localStorage.getItem(
        "userCity"
      ) || ""
    );

    setAddress(
      localStorage.getItem(
        "userAddress"
      ) || ""
    );
  }, []);

  const subtotal = useMemo(() => {
    return item
      ? item.price * item.qty
      : 0;
  }, [item]);

  const delivery =
    subtotal > 999 ? 0 : 40;

  const total =
    Math.max(
      0,
      subtotal - discount
    ) + delivery;

  /* DELIVERY DATE */
  const deliveryDate = new Date();

  deliveryDate.setDate(
    deliveryDate.getDate() + 3
  );

  /* QUANTITY */
  const incQty = () => {
    if (!item) return;

    setItem({
      ...item,
      qty: item.qty + 1,
    });
  };

  const decQty = () => {
    if (!item || item.qty <= 1)
      return;

    setItem({
      ...item,
      qty: item.qty - 1,
    });
  };

  /* COUPON */
  const applyCoupon = () => {
    if (!coupon.trim()) {
      setCouponMsg(
        "Enter coupon code"
      );
      return;
    }

    if (coupon === "SAVE10") {
      setDiscount(
        Math.round(
          subtotal * 0.1
        )
      );

      setCouponMsg(
        "10% discount applied"
      );
    } else if (
      coupon === "FLAT50"
    ) {
      setDiscount(50);

      setCouponMsg(
        "₹50 discount applied"
      );
    } else {
      setDiscount(0);

      setCouponMsg(
        "Invalid coupon"
      );
    }
  };

  /* SAVE ADDRESS */
  const saveAddress = () => {
    if (!city.trim()) {
      setAddrErr(
        "City is required"
      );

      return;
    }

    setAddrErr("");

    localStorage.setItem(
      "userCity",
      city
    );

    localStorage.setItem(
      "userAddress",
      address
    );

    setEditing(false);
  };

  /* PAYMENT VALIDATION */
  const validatePayment = () => {
    if (payment === "upi") {
      if (!upiId.includes("@")) {
        setPayErr(
          "Enter valid UPI ID"
        );

        return false;
      }
    }

    if (payment === "card") {
      if (
        card.number.length < 12 ||
        card.cvv.length < 3
      ) {
        setPayErr(
          "Invalid card details"
        );

        return false;
      }
    }

    setPayErr("");

    return true;
  };

  /* PLACE ORDER */
  const placeOrder = () => {
    if (!city) {
      setAddrErr(
        "Please add address"
      );

      return;
    }

    if (!validatePayment())
      return;

    setPlacing(true);

    const order = {
      id: "ORD" + Date.now(),
      item,
      total,
      city,
      address,
      payment,
      date: new Date().toISOString(),
    };

    const existing = JSON.parse(
      localStorage.getItem(
        "orders"
      ) || "[]"
    );

    localStorage.setItem(
      "orders",
      JSON.stringify([
        order,
        ...existing,
      ])
    );

    setTimeout(() => {
      localStorage.removeItem(
        "buyNowItem"
      );

      navigate(
        "/order-success"
      );
    }, 1000);
  };

  if (!item) {
    return (
      <h2 className="empty">
        No product selected
      </h2>
    );
  }

  return (
    <div className="checkout-page">

      {/* STEPS */}
      <div className="steps">

        <span className="active">
          Address
        </span>

        <span>Payment</span>

        <span>Review</span>

      </div>

      <div className="checkout-container">

        {/* LEFT */}
        <div className="checkout-left">

          {/* ADDRESS */}
          <div className="card">

            <div className="card-header">

              <h3>
                Delivery Address
              </h3>

              {!editing && (
                <button
                  onClick={() =>
                    setEditing(true)
                  }
                >
                  Edit
                </button>
              )}

            </div>

            {!editing ? (
              <>
                <p className="city">
                  📍{" "}
                  {city ||
                    "No City Selected"}
                </p>

                <p className="address">
                  {address ||
                    "No Address Added"}
                </p>

                <div className="address-badge">
                  Home Delivery
                  Available
                </div>
              </>
            ) : (
              <div className="address-form">

                <input
                  value={city}
                  onChange={(e) =>
                    setCity(
                      e.target.value
                    )
                  }
                  placeholder="Enter city"
                />

                <textarea
                  value={address}
                  onChange={(e) =>
                    setAddress(
                      e.target.value
                    )
                  }
                  placeholder="Enter full address"
                />

                {addrErr && (
                  <p className="error">
                    {addrErr}
                  </p>
                )}

                <div className="row-btns">

                  <button
                    onClick={
                      saveAddress
                    }
                  >
                    Save Address
                  </button>

                  <button
                    className="ghost"
                    onClick={() =>
                      setEditing(
                        false
                      )
                    }
                  >
                    Cancel
                  </button>

                </div>

              </div>
            )}

          </div>

          {/* PRODUCT */}
          <div className="card">

            <div className="product-card">

              <img
                src={item.img}
                alt={item.name}
              />

              <div className="prod-info">

                <h4>
                  {item.name}
                </h4>

                <div className="product-meta">

                  <span className="meta-chip">
                    Size:{" "}
                    {item.size ||
                      "M"}
                  </span>

                  <span className="meta-chip">
                    Premium
                    Cotton
                  </span>

                  <span className="meta-chip">
                    Casual Wear
                  </span>

                </div>

                <div className="qty">

                  <button
                    onClick={
                      decQty
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.qty}
                  </span>

                  <button
                    onClick={
                      incQty
                    }
                  >
                    +
                  </button>

                </div>

                <p className="delivery-date">
                  Delivery by{" "}
                  {deliveryDate.toDateString()}
                </p>

                <div className="delivery-extra">

                  <span className="delivery-chip">
                    Free Delivery
                  </span>

                  <span className="delivery-chip">
                    7 Days Return
                  </span>

                  <span className="delivery-chip">
                    Secure Packaging
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* PAYMENT */}
          <div className="card">

            <h3>
              Payment Method
            </h3>

            <div className="payment-options">

              {/* COD */}
              <label
                className={`payment-card ${
                  payment === "cod"
                    ? "active"
                    : ""
                }`}
              >

                <div className="payment-top">

                  <div className="payment-title">

                    <div className="payment-icon">
                      💵
                    </div>

                    <div>

                      <div className="payment-name">
                        Cash on
                        Delivery
                      </div>

                      <div className="payment-desc">
                        Pay after
                        product
                        delivery
                      </div>

                    </div>

                  </div>

                  <input
                    type="radio"
                    className="radio"
                    checked={
                      payment ===
                      "cod"
                    }
                    onChange={() =>
                      setPayment(
                        "cod"
                      )
                    }
                  />

                </div>

              </label>

              {/* UPI */}
              <label
                className={`payment-card ${
                  payment === "upi"
                    ? "active"
                    : ""
                }`}
              >

                <div className="payment-top">

                  <div className="payment-title">

                    <div className="payment-icon">
                      📱
                    </div>

                    <div>

                      <div className="payment-name">
                        UPI Payment
                      </div>

                      <div className="payment-desc">
                        GPay,
                        PhonePe,
                        Paytm
                      </div>

                    </div>

                  </div>

                  <input
                    type="radio"
                    className="radio"
                    checked={
                      payment ===
                      "upi"
                    }
                    onChange={() =>
                      setPayment(
                        "upi"
                      )
                    }
                  />

                </div>

                {payment ===
                  "upi" && (
                  <input
                    className="input"
                    value={upiId}
                    onChange={(
                      e
                    ) =>
                      setUpiId(
                        e.target
                          .value
                      )
                    }
                    placeholder="yourname@upi"
                  />
                )}

              </label>

              {/* CARD */}
              <label
                className={`payment-card ${
                  payment === "card"
                    ? "active"
                    : ""
                }`}
              >

                <div className="payment-top">

                  <div className="payment-title">

                    <div className="payment-icon">
                      💳
                    </div>

                    <div>

                      <div className="payment-name">
                        Card
                        Payment
                      </div>

                      <div className="payment-desc">
                        Debit /
                        Credit
                        Cards
                      </div>

                    </div>

                  </div>

                  <input
                    type="radio"
                    className="radio"
                    checked={
                      payment ===
                      "card"
                    }
                    onChange={() =>
                      setPayment(
                        "card"
                      )
                    }
                  />

                </div>

                {payment ===
                  "card" && (
                  <div className="card-grid">

                    <input
                      placeholder="Card Number"
                      onChange={(
                        e
                      ) =>
                        setCard({
                          ...card,
                          number:
                            e
                              .target
                              .value,
                        })
                      }
                    />

                    <input
                      placeholder="Card Holder"
                    />

                    <input placeholder="MM/YY" />

                    <input
                      placeholder="CVV"
                      onChange={(
                        e
                      ) =>
                        setCard({
                          ...card,
                          cvv: e
                            .target
                            .value,
                        })
                      }
                    />

                  </div>
                )}

              </label>

            </div>

            {payErr && (
              <p className="error">
                {payErr}
              </p>
            )}

          </div>

        </div>

        {/* RIGHT */}
        <div className="checkout-right sticky">

          <div className="card summary">

            <h3>
              Order Summary
            </h3>

            {/* COUPON */}
            <div className="coupon">

              <input
                value={coupon}
                onChange={(e) =>
                  setCoupon(
                    e.target.value
                  )
                }
                placeholder="Enter coupon"
              />

              <button
                onClick={
                  applyCoupon
                }
              >
                Apply
              </button>

            </div>

            {couponMsg && (
              <p className="hint">
                {couponMsg}
              </p>
            )}

            {/* SUMMARY */}
            <div className="row">

              <span>
                Subtotal
              </span>

              <span>
                ₹{subtotal}
              </span>

            </div>

            <div className="row">

              <span>
                Discount
              </span>

              <span>
                -₹{discount}
              </span>

            </div>

            <div className="row">

              <span>
                Delivery
              </span>

              <span>
                {delivery === 0
                  ? "Free"
                  : `₹${delivery}`}
              </span>

            </div>

            <hr />

            <div className="row total">

              <span>Total</span>

              <span>
                ₹{total}
              </span>

            </div>

            {subtotal <
              999 && (
              <p className="hint">
                Add ₹
                {999 -
                  subtotal}{" "}
                more for free
                delivery 🚚
              </p>
            )}

            <button
              className="place-order"
              disabled={
                !city ||
                placing
              }
              onClick={
                placeOrder
              }
            >
              {placing
                ? "Processing..."
                : "Place Order"}
            </button>

            <p className="secure">
              🔒 100% Secure
              Payments
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Checkout;