import { useState, useContext } from 'react';
import { AuthContext, createSession } from '../auth/AuthProvider';
import { Navigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState("gurus20");
    const [errors, setErrors] = useState({});
    const { session, setSession } = useContext(AuthContext);

    if (session) {
        return <Navigate to="/dashboard" />;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "gurus20") {
            const session = createSession(username, "7COJe5WYoZ");
            setSession(session);
        }
        else {
            setErrors(er => ({ ...er, "invalid_cred": "Invalid Credentials" }))
        }
    }


    return (
        <>
            <p>Login</p>
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