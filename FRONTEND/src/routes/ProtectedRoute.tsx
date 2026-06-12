import React, { useState } from "react";
import { isLoggedIn } from "../utils/authUtils";
import AuthModal from "../components/auth/AuthModal";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const [showAuth, setShowAuth] = useState(true);

  // ❌ Not logged in → show modal
  if (!isLoggedIn()) {
    return (
      <>
        {showAuth && (
          <AuthModal onClose={() => setShowAuth(false)} />
        )}
      </>
    );
  }

  // ✅ Logged in → show page
  return <>{children}</>;
};

export default ProtectedRoute;