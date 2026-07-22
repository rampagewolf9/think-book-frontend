import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import api from "../lib/axios";

const CreatePage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!title.trim() || !content.trim()){
            toast.error("Please enter both title and content");
            return;
        }
        setLoading(true)
        try {
            await api.post('/notes', {title, content});
            navigate('/')
            toast.success("Note created successfully")
        }
        catch(error){
            console.error("failed to create note", error);
            toast.error("Failed to create note");
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            <div className="mb-6">
                <Link to="/" className="inline-flex items-center gap-2 text-main/60 hover:text-accent-custom transition-colors">
                    <ArrowLeftIcon className="size-4" />
                    <span>Back to Notes</span>
                </Link>
            </div>
            
            <div className="card-glass p-6 md:p-8">
                <h1 className="text-3xl font-bold text-heading tracking-tight mb-6">Create New Note</h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-heading font-medium">Title</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="Enter note title..." 
                            className="input w-full bg-card border border-custom focus:border-accent-custom focus:outline-none rounded-lg p-3 transition-colors text-heading"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-heading font-medium">Content</span>
                        </label>
                        <textarea 
                            placeholder="Start writing your thoughts..." 
                            rows={8}
                            className="textarea w-full bg-card border border-custom focus:border-accent-custom focus:outline-none rounded-lg p-3 transition-colors text-heading resize-y"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    
                    <div className="flex justify-end gap-3 pt-2">
                        <Link 
                            to="/" 
                            className="btn btn-ghost border border-custom hover:bg-card text-main"
                        >
                            Cancel
                        </Link>
                        <button 
                            type="submit" 
                            className="btn bg-accent-custom text-white hover:opacity-90 border-none px-6"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="loading loading-spinner loading-sm">Creating...</span>
                            ) : (
                                "Save Note"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreatePage