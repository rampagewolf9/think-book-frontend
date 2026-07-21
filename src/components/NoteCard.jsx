import { PenSquareIcon, Trash2Icon } from "lucide-react"
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((item) => item._id !== id));
      toast.success("Note deleted successfully");
    } catch (error) {
      console.error("failed to delete the note", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <Link
      to={`/notes/${note._id}`}
      className="card-glass card-hover block hover:no-underline transition-all duration-200"
    >
      <div className="card-body p-0">
        <h3 className="card-title text-heading text-lg font-semibold">{note.title}</h3>
        <p className="text-main/80 line-clamp-3 mt-2">{note.content}</p>

        <div className="card-actions justify-between items-center mt-4 pt-2 border-t border-custom">
          <span className="text-sm text-main/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <button
              className="btn btn-ghost btn-xs text-error hover:bg-error/10"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;