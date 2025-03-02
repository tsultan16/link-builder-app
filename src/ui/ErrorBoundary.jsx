import { Link } from 'react-router-dom';


export default function ErrorBoundary() {
    return (
        <div>
            <h1>404 Not Found</h1>
            <Link to="/">Go back to Home page</Link>
        </div>
    );

}