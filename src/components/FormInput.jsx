import React from "react";

const FormInput = ({ label, name, value, onChange, type, placeholder }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                required
            />
        </div>  
  );
};

export default FormInput;