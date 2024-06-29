import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config.js";
import { Spin } from "antd";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    const unSubcribed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        setIsLoading(false);
        navigate("/");
      } else {
        setIsLoading(false);
        navigate("/login");
      }
    });

    return () => {
      unSubcribed();
    };
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spin /> : children}
    </AuthContext.Provider>
  );
}
