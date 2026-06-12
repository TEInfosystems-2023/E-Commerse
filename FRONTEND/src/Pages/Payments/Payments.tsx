import { useEffect, useMemo, useState } from "react";
import "./Payments.css";
import { getData, setData } from "../../utils/storage";

type Payment = {
  id: string;
  amount: number;
  method: string;
  date: string;
};

const Payments = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [showForm, setShowForm] = useState(false);

  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("UPI");

  useEffect(() => {
    const data = getData("payments") || [];
    setPayments(data.reverse());
  }, []);

  const totalSpent = useMemo(() => {
    return payments.reduce((acc, item) => acc + item.amount, 0);
  }, [payments]);

  const handleAddPayment = () => {
    if (!amount) return alert("Enter amount");

    const newPayment: Payment = {
      id: "PAY" + Date.now(),
      amount: Number(amount),
      method,
      date: new Date().toLocaleString(),
    };

    const updated = [newPayment, ...getData("payments")];

    setData("payments", updated);
    setPayments(updated);

    setAmount("");
    setShowForm(false);
  };

  return (
    <div className="payments-page">
      {/* HERO */}
      <section className="payments-hero">
        <div className="hero-left">
          <span className="hero-badge">Secure Payment Center</span>

          <h1>Payments & Transactions</h1>

          <p>
            Manage your cards, UPI, banking methods and track all premium
            marketplace transactions in one place.
          </p>

          <div className="hero-actions">
            <button
              className="primary-btn"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? "Close Form" : "Add Payment"}
            </button>

            <button className="secondary-btn">
              Transaction History
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="wallet-top">
            <span>Premium Wallet</span>
            <span>•••• 2048</span>
          </div>

          <div className="wallet-amount">
            ₹{totalSpent.toLocaleString()}
          </div>

          <div className="wallet-bottom">
            <div>
              <small>Total Payments</small>
              <h3>{payments.length}</h3>
            </div>

            <div>
              <small>Last Payment</small>

              <h3>
                ₹
                {payments[0]?.amount
                  ? payments[0].amount.toLocaleString()
                  : "0"}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">💳</div>

          <div>
            <span>Total Spent</span>
            <h3>₹{totalSpent.toLocaleString()}</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">📦</div>

          <div>
            <span>Transactions</span>
            <h3>{payments.length}</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">✅</div>

          <div>
            <span>Success</span>
            <h3>{payments.length}</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">⚡</div>

          <div>
            <span>Checkout</span>
            <h3>Active</h3>
          </div>
        </div>
      </section>

      {/* METHODS */}
      <section className="methods-grid">
        <div className="method-card">
          <div className="method-logo upi">UPI</div>

          <div>
            <h4>UPI Payments</h4>
            <p>Google Pay, PhonePe, Paytm</p>
          </div>
        </div>

        <div className="method-card">
          <div className="method-logo visa">VISA</div>

          <div>
            <h4>Cards</h4>
            <p>Visa, MasterCard, RuPay</p>
          </div>
        </div>

        <div className="method-card">
          <div className="method-logo bank">🏦</div>

          <div>
            <h4>Net Banking</h4>
            <p>All major banks supported</p>
          </div>
        </div>

        <div className="method-card">
          <div className="method-logo cod">💵</div>

          <div>
            <h4>Cash on Delivery</h4>
            <p>Available on selected orders</p>
          </div>
        </div>
      </section>

      {/* FORM */}
      {showForm && (
        <section className="payment-form-wrapper">
          <div className="payment-form-header">
            <h2>Add Payment</h2>
            <p>Fast and secure payment processing</p>
          </div>

          <div className="payment-form">
            <div className="form-group">
              <label>Amount</label>

              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Method</label>

              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
              >
                <option>UPI</option>
                <option>Card</option>
                <option>Net Banking</option>
                <option>Cash on Delivery</option>
              </select>
            </div>

            <button className="submit-btn" onClick={handleAddPayment}>
              Complete Payment
            </button>
          </div>
        </section>
      )}

      {/* TRANSACTIONS */}
      <section className="transactions-section">
        <div className="transactions-header">
          <div>
            <h2>Recent Transactions</h2>
            <p>Track all payment activities</p>
          </div>

          <button className="filter-btn">Latest</button>
        </div>

        <div className="payments-list">
          {payments.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">💳</div>

              <h3>No Payments Yet</h3>

              <p>Your transactions will appear here.</p>

              <button onClick={() => setShowForm(true)}>
                Make First Payment
              </button>
            </div>
          ) : (
            payments.map((p, index) => (
              <div className="payment-card" key={p.id}>
                <div className="payment-left">
                  <div className="payment-icon">
                    {p.method === "UPI"
                      ? "📱"
                      : p.method === "Card"
                      ? "💳"
                      : p.method === "Net Banking"
                      ? "🏦"
                      : "💵"}
                  </div>

                  <div>
                    <h3>₹{p.amount.toLocaleString()}</h3>

                    <div className="payment-tags">
                      <span>{p.method}</span>
                      <span>{p.id}</span>
                    </div>

                    <p>{p.date}</p>
                  </div>
                </div>

                <div className="payment-right">
                  <div className="success-badge">
                    Success
                  </div>

                  <div className="payment-actions">
                    <button>Invoice</button>
                    <button>Details</button>
                  </div>

                  <small>
                    #{String(index + 1).padStart(2, "0")}
                  </small>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Payments;