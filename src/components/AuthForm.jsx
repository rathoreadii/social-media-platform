import React from "react";
import FormInput from "./FormInput";

const AuthForm = ({
    title,
    formData,
    onChange,
    onSubmit,
    error,
    showConfirmPassword = false,
    buttonText= "Submit",
}) => {
    return (
        <form
            onSubmit={onSubmit}
            className="bg-white p-6 rounded shadow-md w-full max-w-sm space-y-4"
        >
            <h2 className="text-xl font-bold text-center">{title}</h2>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <FormInput
                label="Username"
                name="username"
                value={formData.username}
                onChange={onChange}
                type="text"
                placeholder="Enter username"
            />

            <FormInput
                label="Password"
                name="password"
                value={formData.password}
                onChange={onChange}
                type="password"
                placeholder="Enter password"
            />

            {showConfirmPassword && (
                <FormInput
                    label="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
            )}

            <button
                type="Submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                {buttonText}
            </button>
        </form>
    );
};

export default AuthForm;