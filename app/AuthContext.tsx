'use client';

import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from 'react';

interface AuthContextProps {
    isAuthenticated: boolean;
    login: (token: string, role: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const user = localStorage.getItem('user');
        const role = localStorage.getItem('role');
        if (user && role) {
            setIsAuthenticated(true);
        }
    }, []);

    const login = (token: string, role: string) => {
        setIsAuthenticated(true);
        localStorage.setItem('user', token);
        localStorage.setItem('role', role);
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('user');
        localStorage.removeItem('role');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
