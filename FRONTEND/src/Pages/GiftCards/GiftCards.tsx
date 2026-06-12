import { useEffect, useMemo, useState } from "react";
import "./GiftCards.css";
import { getData, setData } from "../../utils/storage";

type GiftCard = {
  code: string;
  amount: number;
  used: boolean;
  date: string;
};

type Transaction = {
  type: "credit" | "debit";
  amount: number;
  date: string;
};

const VALID_CODES: Record<string, number> = {
  FREE100: 100,
  BONUS200: 200,
  WELCOME50: 50,
};

const GiftCards = () => {
  const [code, setCode] = useState("");
  const [balance, setBalance] = useState(0);
  const [cards, setCards] = useState<GiftCard[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    setBalance(getData("giftBalance") || 0);
    setCards(getData("giftCards") || []);
    setTransactions(getData("giftTransactions") || []);
  }, []);

  const totalRedeemed = useMemo(() => {
    return cards.reduce((acc, card) => acc + card.amount, 0);
  }, [cards]);

  const redeemCode = () => {
    const upperCode = code.toUpperCase().trim();

    if (!VALID_CODES[upperCode]) {
      return alert("Invalid gift code");
    }

    const alreadyUsed = cards.find((c) => c.code === upperCode);

    if (alreadyUsed) {
      return alert("Code already used");
    }

    const amount = VALID_CODES[upperCode];

    const newCard: GiftCard = {
      code: upperCode,
      amount,
      used: true,
      date: new Date().toLocaleString(),
    };

    const newBalance = balance + amount;

    const newTransaction: Transaction = {
      type: "credit",
      amount,
      date: newCard.date,
    };

    setData("giftCards", [newCard, ...cards]);
    setData("giftBalance", newBalance);
    setData("giftTransactions", [newTransaction, ...transactions]);

    setCards([newCard, ...cards]);
    setBalance(newBalance);
    setTransactions([newTransaction, ...transactions]);

    setCode("");
  };

  return (
    <div className="gift-page">
      {/* HERO */}
      <section className="gift-hero">
        <div className="gift-wallet">
          <div className="wallet-top">
            <span>Premium Gift Wallet</span>
            <span>•••• 2026</span>
          </div>

          <div className="wallet-balance">
            ₹{balance.toLocaleString()}
          </div>

          <div className="wallet-bottom">
            <div>
              <small>Redeemed Cards</small>
              <h3>{cards.length}</h3>
            </div>

            <div>
              <small>Total Credits</small>
              <h3>₹{totalRedeemed.toLocaleString()}</h3>
            </div>
          </div>
        </div>

        <div className="gift-info">
          <span className="gift-badge">
            Premium Rewards
          </span>

          <h1>Gift Cards & Rewards</h1>

          <p>
            Redeem marketplace gift cards, unlock wallet
            rewards and manage your premium balance in
            one secure place.
          </p>

          <div className="gift-actions">
            <button className="primary-btn">
              Buy Gift Card
            </button>

            <button className="secondary-btn">
              Transaction History
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="gift-stats">
        <div className="stat-card">
          <div className="stat-icon blue">🎁</div>

          <div>
            <span>Wallet Balance</span>
            <h3>₹{balance}</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">💳</div>

          <div>
            <span>Gift Cards</span>
            <h3>{cards.length}</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">✅</div>

          <div>
            <span>Transactions</span>
            <h3>{transactions.length}</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">⚡</div>

          <div>
            <span>Rewards</span>
            <h3>Active</h3>
          </div>
        </div>
      </section>

      {/* SAMPLE CODES */}
      <section className="sample-codes">
        <div className="sample-card">
          <span>FREE100</span>
          <p>Get ₹100 wallet credit</p>
        </div>

        <div className="sample-card">
          <span>BONUS200</span>
          <p>Unlock ₹200 reward</p>
        </div>

        <div className="sample-card">
          <span>WELCOME50</span>
          <p>Welcome bonus ₹50</p>
        </div>
      </section>

      {/* REDEEM */}
      <section className="redeem-wrapper">
        <div className="redeem-header">
          <h2>Redeem Gift Card</h2>
          <p>Enter your code to add credits instantly</p>
        </div>

        <div className="gift-redeem">
          <input
            placeholder="Enter gift code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <button onClick={redeemCode}>
            Redeem Now
          </button>
        </div>
      </section>

      {/* TRANSACTIONS */}
      <section className="gift-section">
        <div className="section-header">
          <div>
            <h2>Recent Transactions</h2>
            <p>Track all wallet activities</p>
          </div>

          <button className="view-btn">
            Latest
          </button>
        </div>

        {transactions.length === 0 ? (
          <div className="empty-box">
            <div className="empty-icon">💸</div>

            <h3>No Transactions Yet</h3>

            <p>
              Your redeemed gift card history will
              appear here.
            </p>
          </div>
        ) : (
          <div className="transactions-list">
            {transactions.map((t, i) => (
              <div className="txn-card" key={i}>
                <div className="txn-left">
                  <div className="txn-icon">
                    {t.type === "credit"
                      ? "🎉"
                      : "💳"}
                  </div>

                  <div>
                    <h3>
                      {t.type === "credit"
                        ? "+"
                        : "-"}
                      ₹{t.amount}
                    </h3>

                    <p>{t.date}</p>
                  </div>
                </div>

                <div
                  className={`txn-status ${t.type}`}
                >
                  {t.type}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CARDS */}
      <section className="gift-section">
        <div className="section-header">
          <div>
            <h2>Redeemed Cards</h2>
            <p>Previously activated cards</p>
          </div>

          <button className="view-btn">
            View All
          </button>
        </div>

        {cards.length === 0 ? (
          <div className="empty-box">
            <div className="empty-icon">🎁</div>

            <h3>No Gift Cards Used</h3>

            <p>
              Redeemed cards will appear here after
              activation.
            </p>
          </div>
        ) : (
          <div className="redeemed-grid">
            {cards.map((c, i) => (
              <div className="redeemed-card" key={i}>
                <div className="redeemed-top">
                  <span>Gift Card</span>

                  <span className="used">
                    Used
                  </span>
                </div>

                <h2>{c.code}</h2>

                <h3>₹{c.amount}</h3>

                <p>{c.date}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default GiftCards;