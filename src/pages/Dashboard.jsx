import { Link } from "react-router-dom";
import { AuthContext } from '../auth/AuthProvider';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';


export default function Dashboard() {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem("auth");
        setIsAuthenticated(false);
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <p>Dashboard</p>
            <button onClick={handleLogout}>Logout</button>
            <Link to="/">Home</Link>
        </>
    )
}