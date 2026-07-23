import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LoaderIcon } from "lucide-react";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center space-y-4">
        <LoaderIcon className="animate-spin size-12 text-accent-custom" />
        <p className="text-main font-medium">Checking authentication...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;
