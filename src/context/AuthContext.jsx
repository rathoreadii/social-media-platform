import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;   // null means not logged in
    });

    const login = (username, password) => {
        //Dummy Login
        if (username === "admin" && password === "1234") {
            const loggedInUser = { username, id: 1 };
            setUser(loggedInUser);
            localStorage.setItem("user", JSON.stringify(loggedInUser));
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use auth
export const useAuth = () => useContext(AuthContext);