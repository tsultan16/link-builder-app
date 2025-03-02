import { useState } from "react";
import { DynamicIcon } from 'lucide-react/dynamic';

const AnalyzeForm = ({ onAnalyze, isLoading }) => {
    const [ url, setUrl ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Analyze form submitted!")
        try {
            new URL(url);
            onAnalyze(url);
            console.log

        } catch (error) {
            alert('Please enter a valid URL (e.g., https://example.com)')    
        }

    }
        
    return (
        <form onSubmit={handleSubmit} className="flex items-align gap-2 w-full">
            <div className="flex-1">
                <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter your website URL (e.g., https://example.com)" 
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700" 
                title="Please enter a valid URL starting with http:// or https://"
                pattern="https?://.*"
                required/>
            </div>
            <button type="submit" className="flex justify-center items-center gap-2 bg-green-700 text-white text-sm rounded-md px-4 py-2 cursor-pointer hover:bg-green-600 transition-all duration-150">
                <DynamicIcon name="search" className='h-4 w-4 text-white' />
                <span className=" font-bold">{isLoading ? "Analyzing..." : "Analyze"}</span>
            </button>
        </form>    
    );
}


export default AnalyzeForm;
