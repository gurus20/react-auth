import { Link } from "react-router-dom"
import { AuthContext, clearSession } from '../auth/AuthProvider';
// import { ThemeContext } from './DarkMode';
import { useContext } from 'react';


export default function Home() {
    const { session, setSession } = useContext(AuthContext);
    // const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    const handleLogout = () => {
        clearSession();
        setSession(null);
    }

    const toggleTheme = () => {
        const theme = localStorage.getItem('dark-theme');
        
        if (theme === "true") {
            localStorage.setItem('dark-theme', false);
            document.body.classList.remove('dark-theme');
        }
        else {
            localStorage.setItem('dark-theme', true);
            document.body.classList.add('dark-theme');
        }
    }

    return (
        <>
            <div className="container mt-5 py-5 rounded-5 cover-space bg-dark">
                <div className="text-center text-white">
                    <h3>Welcome to Reactor</h3>
                    <p className="lead">This Project handle Authentication and session management.</p>
                    {
                        session ?
                            <>
                                <p className="text-primary">You are authenticated as {session.user}</p>
                                <button className="btn btn-success" onClick={handleLogout}>Logout</button>
                            </> :
                            <>
                                <p className="text-danger">You are not authenticated</p>
                                <Link to={"/login"} className="btn btn-success"> <i className="bi bi-person-fill"></i> Login</Link>
                            </>
                    } <br /> <br />
                    <Link to={"/data"}>Go to Data</Link> <br /> <br />
                    <button onClick={toggleTheme}>Change Theme</button>
                </div>
            </div>

        </>
    )
}