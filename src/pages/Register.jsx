import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { useAuth } from "../context/AuthContext";

const Register = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { username, password, confirmPassword } = formData;

        if (!username || !password || !confirmPassword) {
            return setError("All fields are required.");
        }

        if (password !== confirmPassword) {
            return setError("Passwords do not match");
        }

        const user = {
            id: Date.now(),
            username,
        };

        localStorage.setItem(user, JSON.stringify(user));
        login(user);
        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <AuthForm
                title="Register"
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
                error={error}
                showConfirmPassword={true}
                buttonText="Create Account"
            />
        </div>
    );
};

export default Register;