import { Link } from "react-router-dom";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-glass sticky top-0 z-50 border-b border-custom">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-accent-custom font-mono tracking-tight hover:opacity-90 transition-opacity">
            ThinkBoard
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to={"/create"}
              className="btn bg-accent-custom text-white hover:opacity-90 border-none flex items-center gap-2"
            >
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;