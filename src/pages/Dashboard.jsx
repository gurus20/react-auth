// import { Link } from "react-router-dom";
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
            <div className="container cover-space mt-5 py-5 bg-dark rounded-5">
                <div className="text-center text-white">
                    <h3>Welcome to Reactor</h3>
                    <p className="lead">This Project handle Authentication and session management.</p>
                    <h5 className="text-primary">Dashboard - Logged in as {session.user}</h5>
                    <button type="submit" className='btn btn-danger' onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </>
    )
}