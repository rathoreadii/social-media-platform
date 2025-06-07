import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="sticky top-0 z-50 bg-gray-100 shadow-md p-4 flex gap-4">
            <Link to="/">Home</Link>
            {user ? (
                    <>
                        <Link to="/create">Create</Link>
                        <Link to={`/profile/${user.id}`}>My profile</Link>
                        <button onClick={logout} className="text-red-600 ml-auto">
                            Logout
                        </button>
                    </>
                ) : (
                        <>
                            <Link to="/login">Login Page</Link>
                            <Link to="/register">Registration Page</Link>
                        </>
                )}
        </nav>
    );
};

export default Navbar;