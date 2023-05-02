import { Link } from "react-router-dom"
import { AuthContext, clearSession } from '../auth/AuthProvider';
import { useContext } from 'react';


export default function Home() {
    const { session, setSession } = useContext(AuthContext);

    const handleLogout = () => {
        clearSession();
        setSession(null);
    }

    return (
        <>
            <p>Home -- unprotected route</p>

            {
                session ?
                    <>
                        <p>You are Authenticated as { session.user }</p>
                        <button onClick={handleLogout}>Logout</button>
                    </>:
                    <Link to="/login">Login</Link>
                }
        </>
    )
}