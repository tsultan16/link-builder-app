import { useState } from "react";
import { DynamicIcon } from 'lucide-react/dynamic';

const CampaignModal = ({ onClose, onCampaignSubmit }) => {

    const [ campaignName, setCampaignName ] = useState("");
    const [ industry, setIndustry ] = useState("");
    const [ description, setDescription ] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onCampaignSubmit({ campaignName, industry, description });
        setCampaignName("");
        setIndustry("");
        setDescription("");
        onClose();
        console.log("created new campaign");
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="flex flex-col gap-2 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-between">
                    <h1 className="text-xl font-bold">
                        New Campaign
                    </h1>
                    <button onClick={onClose} aria-label="Close new campaign modal" className="cursor-pointer">
                        <DynamicIcon name="x" className="h-6 w-6 text-gray-500" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-gray-700">
                            Campaign Name
                        </label>
                        <input type="text" placeholder="Enter campaign name" value={campaignName} onChange={(e) => {setCampaignName(e.target.value)}} 
                        className="w-full px-4 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                        required />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-700">
                            Industry
                        </label>
                        <input type="text" placeholder="Enter industry" value={industry} onChange={(e) => {setIndustry(e.target.value)}} 
                        className="w-full px-4 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                        required />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-700">
                            Description
                        </label>
                        <textarea type="text" placeholder="Enter campaign description" value={description} onChange={(e) => {setDescription(e.target.value)}} 
                        className="w-full px-4 py-2 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                        rows={3} />
                    </div>

                    <div className="flex justify-end items-center gap-2 mt-8">
                        <button type="button" onClick={onClose}
                        className="inline-flex justify-center items-center gap-2 border border-green-700 text-sm rounded-md px-4 py-2 cursor-pointer hover:bg-green-100 transition-all duration-150 group">
                            <>
                                <span className="text-green-700 font-bold">Cancel</span>                                                
                            </>                            
                        </button>

                        <button type="submit"
                        className="inline-flex justify-center items-center gap-2 text-sm rounded-md px-4 py-2 cursor-pointer bg-green-600 hover:bg-green-700">
                            <>
                                <DynamicIcon name="rocket" className="h-4 w-4 text-white" />
                                <span className="text-white font-bold">Create Campaign</span>                                                 
                            </>                            
                        </button>
                    </div>

                </form>
            
            </div>
        </div>
    );

}


export default CampaignModal;
