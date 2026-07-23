import { createContext, useContext, useState, useEffect } from "react";
import api from "../lib/axios";
import toast from "react-hot-toast";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user and token exist in localStorage on boot
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signUp = async (name, email, password) => {
    setLoading(true);
    try {
      const res = await api.post("/auth/sign-up", { name, email, password });
      const { token: receivedToken, user: receivedUser } = res.data.data;

      localStorage.setItem("token", receivedToken);
      localStorage.setItem("user", JSON.stringify(receivedUser));

      setToken(receivedToken);
      setUser(receivedUser);
      toast.success("Welcome! Account created successfully");
      return true;
    } catch (error) {
      console.error("Sign up error:", error);
      const message = error.response?.data?.message || "Failed to sign up";
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const res = await api.post("/auth/sign-in", { email, password });
      const { token: receivedToken, user: receivedUser } = res.data.data;

      localStorage.setItem("token", receivedToken);
      localStorage.setItem("user", JSON.stringify(receivedUser));

      setToken(receivedToken);
      setUser(receivedUser);
      toast.success("Welcome back!");
      return true;
    } catch (error) {
      console.error("Sign in error:", error);
      const message = error.response?.data?.message || "Invalid email or password";
      toast.error(message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      // Opt-in: notify backend
      await api.post("/auth/sign-out").catch(() => {});
    } catch (error) {
      console.warn("Sign out request error:", error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setToken(null);
      setUser(null);
      toast.success("Signed out successfully");
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
