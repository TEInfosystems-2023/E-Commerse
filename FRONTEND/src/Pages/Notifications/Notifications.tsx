import { useEffect, useMemo, useState } from "react";
import "./Notifications.css";
import { getData, setData } from "../../utils/storage";

/* TYPES */
type Notification = {
  id: string;
  message: string;
  type: "order" | "payment" | "gift" | "system";
  read: boolean;
  date: string;
};

/* SEED */
const seedNotifications = () => {
  const existing = getData("notifications");

  if (existing && existing.length > 0) return;

  const sample: Notification[] = [
    {
      id: "1",
      message: "Your order #ORD1023 has been shipped 🚚",
      type: "order",
      read: false,
      date: "Today, 10:15 AM",
    },
    {
      id: "2",
      message: "Payment of ₹999 successful via UPI",
      type: "payment",
      read: true,
      date: "Today, 9:40 AM",
    },
    {
      id: "3",
      message: "₹100 gift card added to your wallet 🎁",
      type: "gift",
      read: false,
      date: "Yesterday",
    },
    {
      id: "4",
      message: "Flash Sale! Up to 70% off on electronics",
      type: "system",
      read: false,
      date: "Yesterday",
    },
    {
      id: "5",
      message: "Your order #ORD1019 has been delivered",
      type: "order",
      read: true,
      date: "2 days ago",
    },
    {
      id: "6",
      message: "Refund of ₹499 has been processed",
      type: "payment",
      read: false,
      date: "2 days ago",
    },
    {
      id: "7",
      message: "New login detected from Chrome browser",
      type: "system",
      read: true,
      date: "3 days ago",
    },
    {
      id: "8",
      message: "₹200 bonus added using code BONUS200",
      type: "gift",
      read: false,
      date: "3 days ago",
    },
    {
      id: "9",
      message: "Your wishlist item is now on sale 🔥",
      type: "system",
      read: false,
      date: "4 days ago",
    },
    {
      id: "10",
      message: "Order #ORD1007 is out for delivery",
      type: "order",
      read: false,
      date: "4 days ago",
    },
    {
      id: "11",
      message: "Payment failed. Try again.",
      type: "payment",
      read: false,
      date: "5 days ago",
    },
  ];

  const formatted = sample.map((n) => ({
    ...n,
    id: "NOTIF_" + Date.now() + Math.random(),
  }));

  setData("notifications", formatted);
};

const Notifications = () => {
  const [notes, setNotes] = useState<Notification[]>([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    seedNotifications();

    const data = getData("notifications");

    if (Array.isArray(data)) {
      setNotes(data);
    } else {
      setNotes([]);
    }
  }, []);

  /* FILTER */
  const filteredNotes = useMemo(() => {
    if (activeTab === "all") return notes;

    return notes.filter(
      (n) => n.type === activeTab
    );
  }, [notes, activeTab]);

  /* MARK READ */
  const markAsRead = (id: string) => {
    const updated = notes.map((n) =>
      n.id === id
        ? { ...n, read: true }
        : n
    );

    setNotes(updated);

    setData(
      "notifications",
      updated
    );
  };

  /* DELETE */
  const deleteNote = (id: string) => {
    const updated = notes.filter(
      (n) => n.id !== id
    );

    setNotes(updated);

    setData(
      "notifications",
      updated
    );
  };

  /* CLEAR */
  const clearAll = () => {
    setNotes([]);

    setData("notifications", []);
  };

  /* ICONS */
  const getIcon = (
    type: Notification["type"]
  ) => {
    switch (type) {
      case "order":
        return "🚚";

      case "payment":
        return "💳";

      case "gift":
        return "🎁";

      default:
        return "🔔";
    }
  };

  return (
    <div className="notifications-page">

      {/* HEADER */}
      <section className="notif-top">

        <div>

          <span className="notif-badge">
            Notification Center
          </span>

          <h1>
            Notifications
          </h1>

          <p>
            Track your orders, payments,
            offers and important updates.
          </p>

        </div>

        <div className="notif-stats">

          <div className="stat-box">

            <span>Unread</span>

            <h3>
              {
                notes.filter(
                  (n) => !n.read
                ).length
              }
            </h3>

          </div>

          <div className="stat-box">

            <span>Total</span>

            <h3>
              {notes.length}
            </h3>

          </div>

        </div>

      </section>

      {/* FILTERS */}
      <section className="filter-tabs">

        <button
          className={
            activeTab === "all"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab("all")
          }
        >
          All
        </button>

        <button
          className={
            activeTab === "order"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab("order")
          }
        >
          Orders
        </button>

        <button
          className={
            activeTab === "payment"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab("payment")
          }
        >
          Payments
        </button>

        <button
          className={
            activeTab === "gift"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab("gift")
          }
        >
          Gift Cards
        </button>

        <button
          className={
            activeTab === "system"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab("system")
          }
        >
          System
        </button>

      </section>

      {/* ACTION BAR */}
      {notes.length > 0 && (
        <div className="action-bar">

          <span>
            Showing{" "}
            {filteredNotes.length}{" "}
            notifications
          </span>

          <button onClick={clearAll}>
            Clear All
          </button>

        </div>
      )}

      {/* LIST */}
      {filteredNotes.length === 0 ? (

        <div className="empty-state">

          <div className="empty-icon">
            🔔
          </div>

          <h2>
            No Notifications
          </h2>

          <p>
            You don’t have any updates
            right now.
          </p>

        </div>

      ) : (

        <div className="notifications-grid">

          {filteredNotes.map((n) => (

            <div
              key={n.id}
              className={`notification-card ${
                n.read
                  ? "read"
                  : "unread"
              }`}
            >

              {/* LEFT */}
              <div className="notification-left">

                <div
                  className={`icon-box ${n.type}`}
                >
                  {getIcon(n.type)}
                </div>

                <div className="notification-content">

                  <div className="title-row">

                    <h3>
                      {n.message}
                    </h3>

                    {!n.read && (
                      <span className="new-badge">
                        NEW
                      </span>
                    )}

                  </div>

                  <div className="meta-row">

                    <span>
                      {n.date}
                    </span>

                    <span className="type-tag">
                      {n.type}
                    </span>

                  </div>

                </div>

              </div>

              {/* RIGHT */}
              <div className="notification-actions">

                {!n.read && (
                  <button
                    className="read-btn"
                    onClick={() =>
                      markAsRead(n.id)
                    }
                  >
                    Mark Read
                  </button>
                )}

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteNote(n.id)
                  }
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default Notifications;