import { getData, setData } from "./storage";

type Notification = {
  id: string;
  message: string;
  type: "order" | "payment" | "gift" | "system";
  read: boolean;
  date: string;
};

export const seedNotifications = () => {
  const existing = getData("notifications");

  // prevent duplicate seeding
  if (existing.length >= 10) return;

  const sampleMessages: Notification[] = [
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
    {
      id: "12",
      message: "₹50 welcome bonus added 🎉",
      type: "gift",
      read: true,
      date: "5 days ago",
    },
    {
      id: "13",
      message: "Your account settings updated successfully",
      type: "system",
      read: true,
      date: "6 days ago",
    },
    {
      id: "14",
      message: "Order #ORD1001 has been cancelled",
      type: "order",
      read: false,
      date: "6 days ago",
    },
    {
      id: "15",
      message: "Special offer: Free delivery on all orders",
      type: "system",
      read: false,
      date: "1 week ago",
    },
  ];

  const formatted = sampleMessages.map((n) => ({
    ...n,
    id: "NOTIF_" + Date.now() + Math.random(),
  }));

  setData("notifications", formatted);
};