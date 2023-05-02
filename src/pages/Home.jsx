import { Link } from "react-router-dom"
import { AuthContext } from '../auth/AuthProvider';
import { useContext } from 'react';


export default function Home() {
    const { session, setSession } = useContext(AuthContext);

    const handleLogout = () => {
        localStorage.removeItem("auth");
        setIsAuthenticated(false);
    }

    return (
        <>
            <p>Home -- unprotected route</p>

            {
                localStorage.getItem("auth") ?
                    <>
                        <p>You are Authenticated</p>
                        <button onClick={handleLogout}>Logout</button>
                    </>:
                <Link to="/login">Login</Link>
            }
        </>
    )
}