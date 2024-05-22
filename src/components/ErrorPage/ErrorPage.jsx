import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Oooops!!!!</h2>
            <Link to="/">Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;