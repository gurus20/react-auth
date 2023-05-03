import { createContext, useState } from 'react';

const AuthContext = createContext();

function createSession(user, access_token) {
    const session_obj = {
        user: user,
        access_token: access_token,
        is_authenticated: true
    }
    localStorage.setItem("session", JSON.stringify(session_obj))
    return session_obj;
}

function getSession() {
    const session = localStorage.getItem("session");
    return JSON.parse(session)
}

function clearSession() {
    localStorage.removeItem("session");
}


function AuthProvider({ children }) {
    const [session, setSession] = useState(getSession());
    return (
        <AuthContext.Provider value={{ session, setSession }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext, createSession, clearSession }
