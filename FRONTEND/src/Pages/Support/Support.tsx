import { useEffect, useRef, useState } from "react";
import "./Support.css";

type Message = {
  id: number;
  sender: "user" | "bot";
  text: string;
  time: string;
};

type Ticket = {
  id: number;
  subject: string;
  message: string;
  status: string;
};

const Support = () => {

  const [active, setActive] =
    useState("home");

  const [chatInput, setChatInput] =
    useState("");

  const [messages, setMessages] =
    useState<Message[]>([]);

  const [subject, setSubject] =
    useState("");

  const [issue, setIssue] =
    useState("");

  const [tickets, setTickets] =
    useState<Ticket[]>([]);

  const [faqOpen, setFaqOpen] =
    useState<number | null>(null);

  const chatEndRef =
    useRef<HTMLDivElement | null>(null);

  /* LOAD */

  useEffect(() => {

    const savedMessages =
      JSON.parse(
        localStorage.getItem(
          "supportMessages"
        ) || "[]"
      );

    const savedTickets =
      JSON.parse(
        localStorage.getItem(
          "supportTickets"
        ) || "[]"
      );

    setMessages(savedMessages);

    setTickets(savedTickets);

  }, []);

  /* SCROLL */

  useEffect(() => {

    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages]);

  /* SEND MESSAGE */

  const sendMessage = () => {

    if (!chatInput.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: chatInput,
      time:
        new Date().toLocaleTimeString(),
    };

    const updated = [
      ...messages,
      userMessage,
    ];

    setMessages(updated);

    localStorage.setItem(
      "supportMessages",
      JSON.stringify(updated)
    );

    setChatInput("");

    /* AUTO REPLY */

    setTimeout(() => {

      const botReply: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text:
          "Our support team received your message and will help you shortly.",
        time:
          new Date().toLocaleTimeString(),
      };

      const finalMessages = [
        ...updated,
        botReply,
      ];

      setMessages(finalMessages);

      localStorage.setItem(
        "supportMessages",
        JSON.stringify(finalMessages)
      );

    }, 1200);
  };

  /* ENTER KEY */

  const handleKey = (
    e: React.KeyboardEvent
  ) => {

    if (e.key === "Enter") {
      sendMessage();
    }
  };

  /* CREATE TICKET */

  const createTicket = () => {

    if (!subject || !issue)
      return alert(
        "Fill all fields"
      );

    const newTicket: Ticket = {
      id: Date.now(),
      subject,
      message: issue,
      status: "Open",
    };

    const updated = [
      newTicket,
      ...tickets,
    ];

    setTickets(updated);

    localStorage.setItem(
      "supportTickets",
      JSON.stringify(updated)
    );

    setSubject("");
    setIssue("");

    alert(
      "Ticket submitted successfully"
    );
  };

  const faqData = [
    {
      q: "How do I track my order?",
      a: "Go to Orders page to track delivery status.",
    },
    {
      q: "How to request refund?",
      a: "Open Orders and select return/refund option.",
    },
    {
      q: "Payment failed but money deducted?",
      a: "Amount usually auto-refunds within 3-5 business days.",
    },
  ];

  return (
    <div className="support-page">

      {/* SIDEBAR */}

      <aside className="support-sidebar">

        <div className="sidebar-top">

          <h2>
            Support Center
          </h2>

          <span>
            24×7 Active
          </span>

        </div>

        <div className="menu">

          <button
            className={
              active === "home"
                ? "active"
                : ""
            }
            onClick={() =>
              setActive("home")
            }
          >
            🏠 Overview
          </button>

          <button
            className={
              active === "chat"
                ? "active"
                : ""
            }
            onClick={() =>
              setActive("chat")
            }
          >
            💬 Live Chat
          </button>

          <button
            className={
              active === "ticket"
                ? "active"
                : ""
            }
            onClick={() =>
              setActive("ticket")
            }
          >
            🎫 Raise Ticket
          </button>

          <button
            className={
              active === "faq"
                ? "active"
                : ""
            }
            onClick={() =>
              setActive("faq")
            }
          >
            ❓ FAQ
          </button>

          <button
            className={
              active === "contact"
                ? "active"
                : ""
            }
            onClick={() =>
              setActive("contact")
            }
          >
            📞 Contact
          </button>

        </div>

      </aside>

      {/* CONTENT */}

      <main className="support-content">

        {/* HERO */}

        <section className="support-hero">

          <div>

            <span className="hero-badge">
              PREMIUM SUPPORT
            </span>

            <h1>
              Help & Support Center
            </h1>

            <p>
              Get instant help for
              orders, payments, returns,
              tickets and account issues.
            </p>

          </div>

          <div className="hero-stats">

            <div className="stat-card">

              <span>
                Active Chats
              </span>

              <h3>
                {messages.length}
              </h3>

            </div>

            <div className="stat-card">

              <span>
                Tickets
              </span>

              <h3>
                {tickets.length}
              </h3>

            </div>

          </div>

        </section>

        {/* OVERVIEW */}

        {active === "home" && (

          <div className="card-grid">

            <div className="support-card">

              <div className="icon">
                💬
              </div>

              <h3>
                Live Chat
              </h3>

              <p>
                Connect instantly with
                support agents.
              </p>

              <button
                onClick={() =>
                  setActive("chat")
                }
              >
                Start Chat
              </button>

            </div>

            <div className="support-card">

              <div className="icon">
                🎫
              </div>

              <h3>
                Raise Ticket
              </h3>

              <p>
                Submit your issue for
                faster resolution.
              </p>

              <button
                onClick={() =>
                  setActive("ticket")
                }
              >
                Create Ticket
              </button>

            </div>

            <div className="support-card">

              <div className="icon">
                📦
              </div>

              <h3>
                Order Help
              </h3>

              <p>
                Delivery, tracking and
                returns support.
              </p>

              <button>
                View Orders
              </button>

            </div>

            <div className="support-card">

              <div className="icon">
                💳
              </div>

              <h3>
                Payment Support
              </h3>

              <p>
                Solve refunds and payment
                issues quickly.
              </p>

              <button>
                View Payments
              </button>

            </div>

          </div>

        )}

        {/* CHAT */}

        {active === "chat" && (

          <div className="chat-wrapper">

            <div className="chat-header">

              <div>

                <h2>
                  Live Support
                </h2>

                <span>
                  Agent Online
                </span>

              </div>

              <div className="online-dot"></div>

            </div>

            <div className="chat-messages">

              {messages.length === 0 ? (

                <div className="empty-chat">
                  Start conversation with support
                </div>

              ) : (

                messages.map((m) => (

                  <div
                    key={m.id}
                    className={`message ${m.sender}`}
                  >

                    <p>
                      {m.text}
                    </p>

                    <span>
                      {m.time}
                    </span>

                  </div>

                ))

              )}

              <div ref={chatEndRef}></div>

            </div>

            <div className="chat-input">

              <input
                placeholder="Type your message..."
                value={chatInput}
                onChange={(e) =>
                  setChatInput(
                    e.target.value
                  )
                }
                onKeyDown={handleKey}
              />

              <button
                onClick={sendMessage}
              >
                Send
              </button>

            </div>

          </div>

        )}

        {/* TICKET */}

        {active === "ticket" && (

          <div className="ticket-wrapper">

            <div className="ticket-form">

              <h2>
                Raise Support Ticket
              </h2>

              <input
                placeholder="Ticket Subject"
                value={subject}
                onChange={(e) =>
                  setSubject(
                    e.target.value
                  )
                }
              />

              <textarea
                placeholder="Describe your issue..."
                value={issue}
                onChange={(e) =>
                  setIssue(
                    e.target.value
                  )
                }
              />

              <button
                onClick={createTicket}
              >
                Submit Ticket
              </button>

            </div>

            <div className="ticket-history">

              <h3>
                Recent Tickets
              </h3>

              {tickets.length === 0 ? (

                <p className="empty-ticket">
                  No tickets yet
                </p>

              ) : (

                tickets.map((t) => (

                  <div
                    className="ticket-card"
                    key={t.id}
                  >

                    <div>

                      <h4>
                        {t.subject}
                      </h4>

                      <p>
                        {t.message}
                      </p>

                    </div>

                    <span>
                      {t.status}
                    </span>

                  </div>

                ))

              )}

            </div>

          </div>

        )}

        {/* FAQ */}

        {active === "faq" && (

          <div className="faq-wrapper">

            <h2>
              Frequently Asked Questions
            </h2>

            {faqData.map(
              (f, index) => (

                <div
                  className="faq-card"
                  key={index}
                >

                  <button
                    className="faq-question"
                    onClick={() =>
                      setFaqOpen(
                        faqOpen === index
                          ? null
                          : index
                      )
                    }
                  >

                    {f.q}

                  </button>

                  {faqOpen === index && (

                    <p className="faq-answer">
                      {f.a}
                    </p>

                  )}

                </div>

              )
            )}

          </div>

        )}

        {/* CONTACT */}

        {active === "contact" && (

          <div className="contact-wrapper">

            <div className="contact-card">

              <h3>
                📞 Phone Support
              </h3>

              <p>
                +91 9876543210
              </p>

            </div>

            <div className="contact-card">

              <h3>
                📧 Email Support
              </h3>

              <p>
                support@example.com
              </p>

            </div>

            <div className="contact-card">

              <h3>
                ⏰ Working Hours
              </h3>

              <p>
                24×7 Available
              </p>

            </div>

          </div>

        )}

      </main>

    </div>
  );
};
export default Support;