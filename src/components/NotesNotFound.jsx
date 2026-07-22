import { NotebookIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NotesNotFound = () => {
  return (
    <div className="card-glass flex flex-col items-center justify-center py-12 px-6 space-y-6 max-w-md mx-auto text-center border border-custom">
      <div className="bg-accent-soft border border-accent-border rounded-full p-6">
        <NotebookIcon className="size-10 text-accent-custom" />
      </div>
      <h3 className="text-2xl font-bold text-heading">No notes yet</h3>
      <p className="text-main/80">
        Ready to organize your thoughts? Create your first note to get started on your journey.
      </p>
      <Link to="/create" className="btn bg-accent-custom text-white hover:opacity-90 border-none">
        Create Your First Note
      </Link>
    </div>
  );
};
export default NotesNotFound;