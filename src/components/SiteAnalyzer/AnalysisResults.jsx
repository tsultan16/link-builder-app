import { DynamicIcon } from 'lucide-react/dynamic';

const AnalysisResults = ({ metrics, relevantDirectories, selectedDirectories, onSelectDirectory, onCreateCampaign }) => {
    const isSelected = (directory) => {
        return selectedDirectories.some(d => d.id === directory.id)
    }
    
    return (
        <>
            <div className="grid grid-cols-3 gap-5">
                <div className=" bg-white px-5 py-6 rounded-md shadow-lg">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-semibold">Domain Authority</span>
                        <DynamicIcon name="chart-no-axes-column" className='h-6 w-6 text-blue-800' />
                    </div>
                    <p className="text-3xl font-bold">{metrics.estimatedDa}</p>
                    <p className="text-sm text-gray-600">Estimated DA score</p>
                </div>

                <div className=" bg-white px-5 py-6 rounded-md shadow-lg">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-semibold">Opportunities</span>
                        <DynamicIcon name="globe" className='h-6 w-6 text-green-800' />
                    </div>
                    <p className="text-3xl font-bold">{metrics.totalOpportunities}</p>
                    <p className="text-sm text-gray-600">Estimated DA score</p>
                </div>

                <div className=" bg-white px-5 py-6 rounded-md shadow-lg">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-semibold">Recommendations</span>
                        <DynamicIcon name="link" className='h-6 w-6 text-purple-800' />
                    </div>
                    <p className="text-3xl font-bold">{metrics.recommendedDirectories}</p>
                    <p className="text-sm text-gray-600">Estimated DA score</p>
                </div>                
            </div>   

            <div className=" bg-white px-5 py-6 rounded-md shadow-lg">
                <div className="pb-4 border-b border-gray-400">
                    <h2 className="text-lg font-semibold mb-1">Recommended Directories</h2>
                    <p className="text-sm text-gray-500">Select directories to include in your campaign</p>
                </div>

                <div className="divide-y divide-gray-200">
                {relevantDirectories.map( directory => 
                    (
                        <div key={directory.id} className="py-4 flex justify-between">
                            <div>
                                <div className="flex items-center gap-3">
                                    <h3 className="font-medium">{directory.name} </h3>
                                    <span className="text-sm text-gray-500">DA: {directory.domainAuthority}</span>
                                </div>

                                <p className="text-sm text-gray-600 mt-1">{directory.url}</p>
                                <p className="text-sm text-gray-500 mt-1">Category: {directory.category}</p>

                            </div>

                            <div className="text-right">
                                <Button isSelected={isSelected(directory)} onSelect={() => onSelectDirectory(directory)}/>
                            </div>
                        </div>
                    )
                )}    
                </div>   
            </div>

            <div>
                {selectedDirectories.length > 0 && (
                    <div className="flex justify-end">
                        <button type="button" onClick={onCreateCampaign}
                        className="inline-flex justify-center items-center gap-2 text-sm rounded-md px-4 py-2 cursor-pointer bg-green-600 hover:bg-green-700">
                            <>
                                <DynamicIcon name="rocket" className="h-4 w-4 text-white" />
                                <span className="text-white font-bold">Create Campaign With {selectedDirectories.length } Directories</span>                                                 
                            </>                            
                        </button>
                    </div>
                )}
            </div>  

        </>
    );
}


const Button = ({ isSelected, onSelect }) => {
    if (!isSelected) {
        return (
            <button type="button" onClick={onSelect}
            className="inline-flex w-28 justify-center items-center gap-2 border border-green-700 text-sm rounded-md px-4 py-2 cursor-pointer hover:bg-green-100 transition-all duration-150 group">
                <>
                    <DynamicIcon name="plus" className="h-4 w-4 text-green-700" />
                    <span className="text-green-700 font-bold">Select</span>                                                
                </>                            
            </button>
        )
    } else {
        return (
            <button type="button" onClick={onSelect}
            className="inline-flex w-28 justify-center items-center gap-2 text-sm rounded-md px-4 py-2 cursor-pointer bg-green-600 hover:bg-green-700">
                <>
                    <DynamicIcon name="check" className="h-4 w-4 text-white" />
                    <span className="text-white font-bold">Selected</span>                                                 
                </>                            
            </button>
        )
    }
}


export default AnalysisResults;

