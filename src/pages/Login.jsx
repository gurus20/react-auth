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
            <div className="container cover-space mt-5 py-5 bg-dark rounded-5">
                <div className="text-center text-white">
                    <h3>Welcome to Reactor</h3>
                    <p className="lead">This Project handle Authentication and session management.</p>
                    <p className='text-danger'>{errors.invalid_cred}</p>
                    <form onSubmit={handleLogin} className="col-4 m-auto d-flex">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-control me-2"
                        /> <br />
                        <button type="submit" className='btn btn-success'>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}