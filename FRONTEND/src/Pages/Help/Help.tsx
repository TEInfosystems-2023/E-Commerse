import { useState } from "react";
import "./Help.css";

type FAQ = {
  question: string;
  answer: string;
};

const faqData: FAQ[] = [
  {
    question: "How do I place an order?",
    answer: "Browse products, add items to cart, and proceed to checkout.",
  },
  {
    question: "How can I cancel my order?",
    answer: "Go to Orders page and cancel if the option is available.",
  },
  {
    question: "When will I get my refund?",
    answer: "Refunds are processed within 5–7 working days.",
  },
  {
    question: "How to use a gift card?",
    answer: "Enter the code in the Gift Card section or during checkout.",
  },
  {
    question: "Payment failed, what should I do?",
    answer: "Try again or use a different payment method.",
  },
];

const Help = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="help-page">
      <h2>Help Center</h2>

      {/* SEARCH */}
      <div className="help-search">
        <input type="text" placeholder="Search help topics..." />
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>

        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className="faq-question"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <span>{faq.question}</span>
              <span className="icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      {/* CONTACT */}
      <div className="contact-section">
        <h3>Need More Help?</h3>

        <div className="contact-grid">
          <div className="contact-card">
            <p>📞 Call Support</p>
            <span>+91 9876543210</span>
          </div>

          <div className="contact-card">
            <p>📧 Email Support</p>
            <span>support@example.com</span>
          </div>

          <div className="contact-card">
            <p>💬 Live Chat</p>
            <span>Available 24×7</span>
          </div>
        </div>

        <button className="ticket-btn">Raise a Ticket</button>
      </div>
    </div>
  );
};

export default Help;