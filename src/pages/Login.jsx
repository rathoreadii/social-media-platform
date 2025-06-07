import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginForm from "../components/LoginForm";

const Login = () => {

    const { user, login } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState("");

    // Redirect if already logged in
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(formData.username, formData.password);
        if (!success) {
            setError("Invalid username or password");
        }
    };

    // const handleLogin = () => {
    //     const dummyUser = {
    //         id: 1,
    //         username: "admin",
    //     };
    //     login(dummyUser);
    //     navigate("/");
    // };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <LoginForm
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
                error={error}
            />
        </div>
    );
};

export default Login;