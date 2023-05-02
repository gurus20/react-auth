import { Link } from "react-router-dom";
import { AuthContext, clearSession } from '../auth/AuthProvider';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';


export default function Dashboard() {
    const { session, setSession } = useContext(AuthContext);

    const handleLogout = () => {
        clearSession();
        setSession(null);
    }

    if (!session) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <p>Dashboard, Welcome - { session.user }</p>
            <button onClick={handleLogout}>Logout</button>
            <Link to="/">Home</Link>
        </>
    )
}