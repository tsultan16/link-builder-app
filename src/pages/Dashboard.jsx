import { useState } from "react";
import AnalyzeForm from "../components/SiteAnalyzer/AnalyzeForm";
import AnalysisResults from "../components/SiteAnalyzer/AnalysisResults";
import CampaignModal from "../components/Campaigns/CampaignModal"
import analyzerService from "../services/analyzerService";
import { DynamicIcon } from 'lucide-react/dynamic';


const Dashboard = () => {
    const [ results, setResults ] = useState(null);
    const [ isAnalyzing, setIsAnalyzing ] = useState(false);
    const [ selectedDirectories, setSelectedDirectories ] = useState([]);
    const [ activeCampaigns, setActiveCampaigns ] = useState([]);
    const [ modalOpen, setModalOpen ] = useState(false)

    //console.log("Currently selected directories: ", selectedDirectories.map(d => d.name))
    
    // need to store active campaigns state in database
    console.log("active campaigns ", activeCampaigns)

    const handleAnalyze = async (url) => {
        setIsAnalyzing(true);

        console.log("Analyzing website:  ", url)
        try {
            const websiteResults = await analyzerService.analyzeWebsite(url); 
            setResults(websiteResults);
            console.log("Analysis results", websiteResults);
        } catch (error) {
            console.log("Failed to fetch analysis results: ", error)
        }

        setIsAnalyzing(false);
    }

    const handleSelectDirectory = (directory) => {
        //console.log("Clicked select on directory: ", directory.name);

        const alreadySelected = selectedDirectories.some(d => d.id === directory.id);
        
        let newSelectedDirectories;
        if (alreadySelected) {
            newSelectedDirectories = selectedDirectories.filter(d => d.id !== directory.id);
        } else {
            newSelectedDirectories = [...selectedDirectories, directory];
        }
        setSelectedDirectories(newSelectedDirectories);
    }

    const handleCreateCampaign = () => 
    {
        console.log("creating campaigns with selected directories");
        // check if there is already an active campaign for this url
        if (activeCampaigns.some(campaign => campaign.url === results.url)) {
            console.log(results.url)
            
            // need to add any new directories into existing campaign
            const activeCampaign = activeCampaigns.find(campaign => campaign.url === results.url);
            
            const newDirectories = selectedDirectories.filter(directory => 
                !activeCampaign.directories.some(d => d.id === directory.id)
            );
            
            alert(`There is already an ongoing campaign for ${results.url}. Adding ${newDirectories.length} new directories`);
            activeCampaign.directories = [...activeCampaign.directories, ...newDirectories];

        } else {
            setModalOpen(true);
        }
    } 

    const handleCampaignSubmit = (campaign) => {
        setActiveCampaigns([...activeCampaigns, {...campaign, url:results.url, directories: selectedDirectories}])
        console.log("New campaign created");
    }


    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-xl font-bold">
                Dashboard
            </h1>

            <div className="flex flex-col gap-2 bg-white px-8 py-4 rounded-md shadow-lg">
                <h1 className="font-bold">
                    Analyze Your Website
                </h1>
                <AnalyzeForm onAnalyze={handleAnalyze} isLoading={isAnalyzing}/>
            </div>

            {results && 
                <AnalysisResults metrics={results.metrics} 
                relevantDirectories={results.relevantDirectories} selectedDirectories={selectedDirectories} 
                onSelectDirectory={handleSelectDirectory} onCreateCampaign={handleCreateCampaign} />
            }

            {modalOpen && <CampaignModal onClose={() => {setModalOpen(false)}} onCampaignSubmit={handleCampaignSubmit} />}

        </div>
    );

};




export default Dashboard;
