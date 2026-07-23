import { Link } from "react-router-dom";
import { PlusIcon, LogOutIcon } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="bg-glass sticky top-0 z-50 border-b border-custom">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-accent-custom font-mono tracking-tight hover:opacity-90 transition-opacity">
            ThinkBoard
          </Link>
          <div className="flex items-center gap-4">
            {user && (
              <span className="text-main text-sm font-medium mr-2 hidden sm:inline">
                Hello, <span className="text-heading font-semibold">{user.name}</span>
              </span>
            )}
            <Link
              to={"/create"}
              className="btn bg-accent-custom text-white hover:opacity-90 border-none flex items-center gap-2"
            >
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
            {user && (
              <button
                onClick={signOut}
                className="btn btn-outline border-custom text-heading hover:bg-error hover:text-white hover:border-error flex items-center gap-2 cursor-pointer transition-all"
              >
                <LogOutIcon className="size-5" />
                <span className="hidden md:inline">Sign Out</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;