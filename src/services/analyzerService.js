
// for demo purposes
const mockDirectories = [
    {
        id: 'd1',
        name: 'Tech Startup Directory',
        url: 'https://techstartups.directory',
        domainAuthority: 72,
        category: 'Technology',
        requiresRegistration: true,
        status: 'pending'
    },
    {
        id: 'd2',
        name: 'Digital Marketing Hub',
        url: 'https://digitalmarketing.hub',
        domainAuthority: 65,
        category: 'Marketing',
        requiresRegistration: true,
        status: 'pending'
    },
    {
        id: 'd3',
        name: 'SaaS Products List',
        url: 'https://saasproducts.list',
        domainAuthority: 58,
        category: 'Software',
        requiresRegistration: false,
        status: 'pending'
    },
    {
        id: 'd4',
        name: 'Business Solutions Directory',
        url: 'https://bizdir.solutions',
        domainAuthority: 61,
        category: 'Business',
        requiresRegistration: true,
        status: 'pending'
    },
    {
        id: 'd5',
        name: 'AI & ML Resources',
        url: 'https://aiml.resources',
        domainAuthority: 69,
        category: 'Artificial Intelligence',
        requiresRegistration: true,
        status: 'pending'
    }
];




const analyzeWebsite = async (url) => {
    console.log("returning mock results for website: ", url);

    // return mock results, with 2 second delay
    return new Promise((resolve) => {
        setTimeout(() => {
            const mockResults = {
                url,
                relevantDirectories: mockDirectories,
                metrics: {
                    totalOpportunities: 185,
                    estimatedDa: 52,
                    recommendedDirectories: mockDirectories.length
                }
            };
            resolve(mockResults);
        }, 2000); 
    });


}

export default { analyzeWebsite };











