import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <>
            <div className="bg-gray-100 min-h-screen">
                <header>
                    <Navigation />                    
                </header>

                <main className="container mx-auto px-4 py-8">
                    <Outlet /> 
                </main>
            </div>
        </>
    );

};


export default Layout;






