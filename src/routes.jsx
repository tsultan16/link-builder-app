import Layout from "./ui/Layout";
import Dashboard from "./pages/Dashboard";
import Campaigns from "./pages/Campaigns";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import ErrorBoundary from "./ui/ErrorBoundary";


const routes = [
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorBoundary/>,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'campaigns',
                element: <Campaigns />
            },
            {
                path: 'analytics',
                element: <Analytics />
            },
            {
                path: 'settings',
                element: <Settings />
            },
        ]
    }
];


export default routes;



