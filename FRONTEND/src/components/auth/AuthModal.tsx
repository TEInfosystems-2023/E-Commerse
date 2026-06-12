import "./AuthModal.css";
import { useState } from "react";
import { login } from "../../utils/authUtils";   // ✅ correct path

interface Props {
  onClose: () => void;
}

const AuthModal = ({ onClose }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  /* ✅ HANDLE LOGIN */
  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    login();      // ✅ save login
    onClose();    // ✅ close modal
  };

  return (
    <div className="auth-overlay">
      <div className="auth-container-box">

        {/* LEFT SIDE */}
        <div className="auth-left">
          <h2>Welcome Back</h2>
          <p>Please login to continue shopping with DMART</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="auth-right">

          {/* Close */}
          <span className="close-btn" onClick={onClose}>✕</span>

          {/* Heading */}
          <p className="auth-sub">Please enter your details</p>
          <h3 className="auth-title">Welcome back</h3>

          {/* Email */}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* ERROR */}
          {error && (
            <p style={{ color: "red", fontSize: "13px" }}>
              {error}
            </p>
          )}

          {/* Remember + Forgot */}
          <div className="auth-row">
            <label>
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <span className="forgot">Forgot password?</span>
          </div>

          {/* ✅ LOGIN BUTTON */}
          <button
            className="auth-btn primary-btn"
            onClick={handleLogin}
          >
            Login
          </button>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google */}
          <button className="social-btn google-btn">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="google"
            />
            Sign in with Google
          </button>

          {/* Bottom Signup */}
          <p className="auth-bottom">
            Don’t have an account? <span>Sign up</span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default AuthModal;