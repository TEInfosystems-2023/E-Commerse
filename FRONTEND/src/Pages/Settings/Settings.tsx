import { useEffect, useState } from "react";
import "./Settings.css";

const Settings = () => {

  /* STATES */

  const [theme, setTheme] =
    useState("light");

  const [emailAlerts, setEmailAlerts] =
    useState(true);

  const [appAlerts, setAppAlerts] =
    useState(true);

  const [orderUpdates, setOrderUpdates] =
    useState(true);

  const [promotions, setPromotions] =
    useState(false);

  const [savedText, setSavedText] =
    useState("");

  /* LOAD SETTINGS */

  useEffect(() => {

    const saved =
      JSON.parse(
        localStorage.getItem("settings") || "{}"
      );

    if (saved.theme)
      setTheme(saved.theme);

    if (
      typeof saved.emailAlerts ===
      "boolean"
    )
      setEmailAlerts(
        saved.emailAlerts
      );

    if (
      typeof saved.appAlerts ===
      "boolean"
    )
      setAppAlerts(
        saved.appAlerts
      );

    if (
      typeof saved.orderUpdates ===
      "boolean"
    )
      setOrderUpdates(
        saved.orderUpdates
      );

    if (
      typeof saved.promotions ===
      "boolean"
    )
      setPromotions(
        saved.promotions
      );

  }, []);

  /* APPLY THEME */

  useEffect(() => {

    document.body.classList.remove(
      "light-theme",
      "dark-theme"
    );

    document.body.classList.add(
      theme === "dark"
        ? "dark-theme"
        : "light-theme"
    );

  }, [theme]);

  /* SAVE */

  const saveSettings = () => {

    const settings = {
      theme,
      emailAlerts,
      appAlerts,
      orderUpdates,
      promotions,
    };

    localStorage.setItem(
      "settings",
      JSON.stringify(settings)
    );

    setSavedText(
      "Settings saved successfully"
    );

    setTimeout(() => {
      setSavedText("");
    }, 2500);
  };

  return (
    <div className="settings-page">

      {/* HERO */}

      <section className="settings-hero">

        <div className="hero-left">

          <div className="profile-circle">
            S
          </div>

          <div>

            <span className="hero-badge">
              Premium Account
            </span>

            <h1>
              Account Settings
            </h1>

            <p>
              Customize your ecommerce
              experience, notifications,
              appearance and preferences.
            </p>

          </div>

        </div>

        <div className="hero-stats">

          <div className="hero-card">

            <span>
              Active Theme
            </span>

            <h3>
              {theme === "dark"
                ? "Dark"
                : "Light"}
            </h3>

          </div>

          <div className="hero-card">

            <span>
              Alerts Enabled
            </span>

            <h3>
              {
                [
                  emailAlerts,
                  appAlerts,
                  orderUpdates,
                  promotions,
                ].filter(Boolean).length
              }
            </h3>

          </div>

        </div>

      </section>

      {/* GRID */}

      <div className="settings-grid">

        {/* LEFT */}

        <div className="settings-left">

          {/* APPEARANCE */}

          <section className="settings-card">

            <div className="card-title">

              <div>

                <h2>
                  Appearance
                </h2>

                <span>
                  Choose your dashboard theme
                </span>

              </div>

              <div className="card-icon">
                🎨
              </div>

            </div>

            <div className="theme-grid">

              {/* LIGHT */}

              <button
                className={`theme-card ${
                  theme === "light"
                    ? "active-theme"
                    : ""
                }`}
                onClick={() =>
                  setTheme("light")
                }
              >

                <div className="theme-preview light-preview"></div>

                <h3>
                  Light Mode
                </h3>

                <p>
                  Bright clean interface
                </p>

              </button>

              {/* DARK */}

              <button
                className={`theme-card ${
                  theme === "dark"
                    ? "active-theme"
                    : ""
                }`}
                onClick={() =>
                  setTheme("dark")
                }
              >

                <div className="theme-preview dark-preview"></div>

                <h3>
                  Dark Mode
                </h3>

                <p>
                  Premium dark experience
                </p>

              </button>

            </div>

          </section>

          {/* NOTIFICATIONS */}

          <section className="settings-card">

            <div className="card-title">

              <div>

                <h2>
                  Notifications
                </h2>

                <span>
                  Manage your alerts
                </span>

              </div>

              <div className="card-icon">
                🔔
              </div>

            </div>

            {/* EMAIL */}

            <div className="toggle-row">

              <div>

                <h4>
                  Email Alerts
                </h4>

                <p>
                  Receive updates by email
                </p>

              </div>

              <label className="switch">

                <input
                  type="checkbox"
                  checked={emailAlerts}
                  onChange={() =>
                    setEmailAlerts(
                      !emailAlerts
                    )
                  }
                />

                <span className="slider"></span>

              </label>

            </div>

            {/* APP */}

            <div className="toggle-row">

              <div>

                <h4>
                  App Alerts
                </h4>

                <p>
                  Push notifications
                </p>

              </div>

              <label className="switch">

                <input
                  type="checkbox"
                  checked={appAlerts}
                  onChange={() =>
                    setAppAlerts(
                      !appAlerts
                    )
                  }
                />

                <span className="slider"></span>

              </label>

            </div>

            {/* ORDER */}

            <div className="toggle-row">

              <div>

                <h4>
                  Order Updates
                </h4>

                <p>
                  Delivery and shipping alerts
                </p>

              </div>

              <label className="switch">

                <input
                  type="checkbox"
                  checked={orderUpdates}
                  onChange={() =>
                    setOrderUpdates(
                      !orderUpdates
                    )
                  }
                />

                <span className="slider"></span>

              </label>

            </div>

            {/* PROMOTION */}

            <div className="toggle-row">

              <div>

                <h4>
                  Promotions
                </h4>

                <p>
                  Offers and discount alerts
                </p>

              </div>

              <label className="switch">

                <input
                  type="checkbox"
                  checked={promotions}
                  onChange={() =>
                    setPromotions(
                      !promotions
                    )
                  }
                />

                <span className="slider"></span>

              </label>

            </div>

          </section>

        </div>

        {/* RIGHT */}

        <div className="settings-right">

          {/* SECURITY */}

          <section className="quick-card">

            <div className="quick-top">

              <h3>
                🔒 Security
              </h3>

              <span>
                Protected
              </span>

            </div>

            <p>
              Two-factor authentication
              enabled on your account.
            </p>

            <button>
              Manage Security
            </button>

          </section>

          {/* PAYMENTS */}

          <section className="quick-card">

            <div className="quick-top">

              <h3>
                💳 Payments
              </h3>

              <span>
                3 Saved
              </span>

            </div>

            <p>
              Manage cards, UPI and payment
              methods securely.
            </p>

            <button>
              Open Payments
            </button>

          </section>

          {/* MEMBERSHIP */}

          <section className="premium-card">

            <span>
              PREMIUM MEMBER
            </span>

            <h2>
              Unlock More Benefits
            </h2>

            <p>
              Enjoy early offers, premium
              support and free delivery.
            </p>

            <button>
              View Benefits
            </button>

          </section>

        </div>

      </div>

      {/* SAVE BAR */}

      <div className="save-bar">

        <div>

          <h3>
            Save Preferences
          </h3>

          <p>
            Your account settings will
            update instantly.
          </p>

        </div>

        <div className="save-right">

          {savedText && (
            <span className="saved-text">
              {savedText}
            </span>
          )}

          <button
            className="save-btn"
            onClick={saveSettings}
          >
            Save Settings
          </button>

        </div>

      </div>

    </div>
  );
};

export default Settings;