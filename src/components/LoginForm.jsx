import React from "react";

const LoginForm = ({ formData, onChange, onSubmit, error }) => {
    return (
        <form
            onSubmit={onSubmit}
            className="bg-white p-6 rounded shadow-md w-full max-w-sm space-y-4"
        >
            <h2 className="text-2xl font-bold text-center">Login</h2>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={onChange}
                    className="w-full border px-3 py-2 rounded mt-1"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={onChange}
                    className="w-full border px-3 py-2 rounded mt-1"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                Log In
            </button>
        </form>
    );
};

export default LoginForm;