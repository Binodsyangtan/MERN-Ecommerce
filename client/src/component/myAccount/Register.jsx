import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';

function Reg() {
    const { register } = useContext(AppContext); // Accessing register function from context
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, password } = formData;

        if (!name || !email || !password) {
            toast.error("Please fill in all fields");
            return;
        }

        try {
            const result = await register(name, email, password); // Calling register function from context

            if (result.success) {
                toast.success("Registration successful!");
                navigate("/myaccount");
            } else {
                toast.error("Registration failed.");
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                toast.error("User already exists.");
            } else {
                toast.error("An error occurred. Please try again later.");
            }
        }
    };

    return (
        <>
            <div className="bg-white p-8 rounded shadow-lg max-w-md mx-auto">
                <h2 className="text-2xl font-semibold mb-6">Register</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                        placeholder="Enter your name"
                    />
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                        placeholder="Enter your email"
                    />
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                        placeholder="Enter your password"
                        autoComplete="new-password"
                    />
                    <p className="text-sm text-gray-500 mb-4">
                        A link to set a new password will be sent to your email address.
                    </p>
                    <button type="submit" className="w-full bg-black text-white p-2 rounded">Register</button>
                </form>
            </div>
            
            {/* Toast Notifications */}
            <ToastContainer />
        </>
    );
}

export default Reg;
