import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LogInIcon, MailIcon, LockIcon, LoaderIcon } from "lucide-react";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      return;
    }

    setLoading(true);
    const success = await signIn(email, password);
    setLoading(false);

    if (success) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card-glass w-full max-w-md border border-custom shadow-2xl p-8 rounded-2xl relative overflow-hidden bg-black/40">
        {/* Glow effect */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-accent-custom/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center mb-8 relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-heading font-mono mb-2">
            Think<span className="text-accent-custom">Board</span>
          </h1>
          <p className="text-main text-sm">Sign in to manage your personalized workspace</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div className="form-control">
            <label className="label py-1">
              <span className="label-text text-main font-semibold text-xs uppercase tracking-wider">Email Address</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-main/50">
                <MailIcon className="size-5" />
              </div>
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="input input-bordered w-full pl-10 focus:border-accent-custom focus:outline-none transition-colors bg-black/20 text-heading border-custom"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-control">
            <div className="flex justify-between items-center py-1">
              <label className="label p-0">
                <span className="label-text text-main font-semibold text-xs uppercase tracking-wider">Password</span>
              </label>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-main/50">
                <LockIcon className="size-5" />
              </div>
              <input
                type="password"
                placeholder="••••••••"
                required
                minLength={6}
                className="input input-bordered w-full pl-10 focus:border-accent-custom focus:outline-none transition-colors bg-black/20 text-heading border-custom"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn bg-accent-custom hover:bg-opacity-95 text-white border-none w-full flex items-center justify-center gap-2 mt-4 cursor-pointer font-bold tracking-wide transition-all shadow-lg hover:shadow-accent-custom/20"
            disabled={loading}
          >
            {loading ? (
              <LoaderIcon className="animate-spin size-5" />
            ) : (
              <>
                <LogInIcon className="size-5" />
                <span>Sign In</span>
              </>
            )}
          </button>
        </form>

        <div className="text-center mt-6 text-sm relative z-10 text-main">
          New to ThinkBoard?{" "}
          <Link to="/signup" className="text-accent-custom hover:underline font-medium transition-all">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
