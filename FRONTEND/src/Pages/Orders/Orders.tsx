import { useEffect, useState } from "react";
import "./Orders.css";
import { getData } from "../../utils/storage";

type OrderItem = {
  name: string;
  price: number;
  img?: string;
};

type Order = {
  id: string;
  items?: OrderItem[];
  item?: {
    name: string;
    price: number;
    img?: string;
    qty?: number;
  };
  total: number;
  date: string;
  status?: string;
  payment?: string;
  city?: string;
  address?: string;
};

const Orders = () => {
  const [orders, setOrders] =
    useState<Order[]>([]);

  useEffect(() => {
    const data = getData("orders");

    if (Array.isArray(data)) {
      setOrders([...data].reverse());
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <div className="orders-page">

      <div className="orders-header">

        <div>
          <h2>Your Orders</h2>
          <p>
            Track, manage and reorder
            your products
          </p>
        </div>

        <div className="orders-count">
          {orders.length} Orders
        </div>

      </div>

      {orders.length === 0 ? (
        <div className="empty-orders">

          <div className="empty-icon">
            📦
          </div>

          <h3>No Orders Yet</h3>

          <p>
            Your placed orders will
            appear here.
          </p>

        </div>
      ) : (
        orders.map((order) => {
          const item =
            order.item ||
            order.items?.[0];

          return (
            <div
              className="order-card"
              key={order.id}
            >

              {/* TOP */}
              <div className="order-top">

                <div>

                  <h3>
                    Order #{order.id}
                  </h3>

                  <p>
                    Ordered on{" "}
                    {new Date(
                      order.date
                    ).toDateString()}
                  </p>

                </div>

                <div
                  className={`status ${
                    order.status ||
                    "Pending"
                  }`}
                >
                  {order.status ||
                    "Pending"}
                </div>

              </div>

              {/* MAIN */}
              <div className="order-main">

                {/* IMAGE */}
                <div className="product-image">

                  <img
                    src={
                      item?.img ||
                      "https://via.placeholder.com/120"
                    }
                    alt="product"
                  />

                </div>

                {/* DETAILS */}
                <div className="order-details">

                  <h4>
                    {item?.name}
                  </h4>

                  <div className="chips">

                    <span>
                      Premium Product
                    </span>

                    <span>
                      Free Delivery
                    </span>

                    <span>
                      Secure Payment
                    </span>

                  </div>

                  <div className="timeline">

                    <div className="timeline-item active">
                      ✔ Ordered
                    </div>

                    <div className="timeline-item active">
                      ✔ Packed
                    </div>

                    <div className="timeline-item">
                      🚚 Shipping
                    </div>

                    <div className="timeline-item">
                      📦 Delivered
                    </div>

                  </div>

                  <div className="address-box">

                    <h5>
                      Delivery Address
                    </h5>

                    <p>
                      {order.city ||
                        "Bhubaneswar"}
                    </p>

                    <span>
                      {order.address ||
                        "Home Address"}
                    </span>

                  </div>

                </div>

                {/* RIGHT */}
                <div className="order-right">

                  <h3>
                    ₹{order.total}
                  </h3>

                  <p className="payment-method">
                    {order.payment ===
                    "upi"
                      ? "UPI Payment"
                      : order.payment ===
                        "card"
                      ? "Card Payment"
                      : "Cash on Delivery"}
                  </p>

                  <button className="track-btn">
                    Track Order
                  </button>

                  <button className="invoice-btn">
                    Download Invoice
                  </button>

                  <button className="reorder-btn">
                    Reorder
                  </button>

                  <button className="cancel-btn">
                    Cancel Order
                  </button>

                </div>

              </div>

            </div>
          );
        })
      )}

    </div>
  );
};

export default Orders;