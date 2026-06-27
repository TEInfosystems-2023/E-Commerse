import "./AuthModal.css";
     import { useState } from "react";

interface Props {
  onClose: () => void;
}

const AuthModal = ({ onClose }: Props) => {
  const [isSignup, setIsSignup] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    } 

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid email or password");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("loggedIn", "true");

      setError("");
      onClose();
      window.location.reload();
    } catch (error) {
      console.error(error);
      setError("Server error. Please try again.");
    }
  };

  const handleSignup = async () => {
    if (!name || !email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed");
        return;
      }

      alert("Registration successful. Please login.");

      setName("");
      setEmail("");
      setPassword("");
      setError("");

      setIsSignup(false);
    } catch (error) {
      console.error(error);
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-container-box">
        <div className="auth-left">
          <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>

          <p>
            {isSignup
              ? "Create your DMART account"
              : "Please login to continue shopping with DMART"}
          </p>
        </div>

        <div className="auth-right">
          <span className="close-btn" onClick={onClose}>
            ✕
          </span>

          <p className="auth-sub">
            {isSignup
              ? "Create your account"
              : "Please enter your details"}
          </p>

          <h3 className="auth-title">
            {isSignup ? "Sign Up" : "Welcome Back"}
          </h3>

          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
              
          {error && (
            <p style={{ color: "red", fontSize: "13px" }}>
              {error}
            </p>
          )}

          {!isSignup && (
            <div className="auth-row">
              <label>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <span className="forgot">
                Forgot password?
              </span>
            </div>
          )}

          <button
            className="auth-btn primary-btn"
            onClick={isSignup ? handleSignup : handleLogin}
          >
            {isSignup ? "Create Account" : "Login"}
          </button>

          <div className="divider">OR</div>

          <button className="social-btn google-btn">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="google"
            />
            Sign in with Google
          </button>

          <p className="auth-bottom">
            {isSignup
              ? "Already have an account?"
              : "Don't have an account?"}

            <span
              style={{
                cursor: "pointer",
                color: "#007bff",
                marginLeft: "5px",
              }}
              onClick={() => {
                setIsSignup(!isSignup);
                setError("");
              }}
            >
              {isSignup ? "Login" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;