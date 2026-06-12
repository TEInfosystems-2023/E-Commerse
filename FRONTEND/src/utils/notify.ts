import { getData, setData } from "./storage";

type Notification = {
  id: string;
  message: string;
  type: "order" | "payment" | "gift" | "system";
  read: boolean;
  date: string;
};

export const addNotification = (message: string, type: Notification["type"]) => {
  const existing = getData("notifications");

  const newNote: Notification = {
    id: "NOTIF_" + Date.now(),
    message,
    type,
    read: false,
    date: new Date().toLocaleString(),
  };

  const updated = [newNote, ...existing];

  setData("notifications", updated);
};