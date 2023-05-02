import { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import { Navigate } from 'react-router-dom';
import { create_session, get_session } from "../auth/Session"

export default function Login() {
    const [username, setUsername] = useState("gurus20");
    const [errors, setErrors] = useState({});
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    if (isAuthenticated) {
        return <Navigate to="/dashboard" />;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "gurus20") {
            create_session(username, "7COJe5WYoZ");
            setIsAuthenticated(get_session().is_authenticated);
        }
        else {
            setErrors(er => ({ ...er, "invalid_cred": "Invalid Credentials" }))
        }
    }


    return (
        <>
            <p>{ errors.invalid_cred }</p>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /> <br />
                <button type="submit">Login</button>
            </form>
        </>
    )
}