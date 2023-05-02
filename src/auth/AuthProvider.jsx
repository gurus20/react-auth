import { createContext, useState } from 'react';
import { get_session } from './Session';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [session, setSession] = useState(get_session());

    return (
        <AuthContext.Provider value={{ session, setSession }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };
