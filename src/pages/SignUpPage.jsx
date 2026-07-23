import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { UserIcon, MailIcon, LockIcon, LoaderIcon, UserPlusIcon } from "lucide-react";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);
    const success = await signUp(name, email, password);
    setLoading(false);

    if (success) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card-glass w-full max-w-md border border-custom shadow-2xl p-8 rounded-2xl relative overflow-hidden bg-black/40">
        {/* Glow effect */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-custom/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center mb-8 relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-heading font-mono mb-2">
            Create <span className="text-accent-custom">Account</span>
          </h1>
          <p className="text-main text-sm">Join ThinkBoard to capture and organize your ideas</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div className="form-control">
            <label className="label py-1">
              <span className="label-text text-main font-semibold text-xs uppercase tracking-wider">Full Name</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-main/50">
                <UserIcon className="size-5" />
              </div>
              <input
                type="text"
                placeholder="John Doe"
                required
                className="input input-bordered w-full pl-10 focus:border-accent-custom focus:outline-none transition-colors bg-black/20 text-heading border-custom"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

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
            <label className="label py-1">
              <span className="label-text text-main font-semibold text-xs uppercase tracking-wider">Password</span>
            </label>
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
                <UserPlusIcon className="size-5" />
                <span>Create Account</span>
              </>
            )}
          </button>
        </form>

        <div className="text-center mt-6 text-sm relative z-10 text-main">
          Already have an account?{" "}
          <Link to="/auth" className="text-accent-custom hover:underline font-medium transition-all">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
