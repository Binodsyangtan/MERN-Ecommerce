import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import AppContext from '../../context/AppContext';

function Login() {
    const navigate = useNavigate();
    const { login } = useContext(AppContext);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const { email, password } = formData;

    const submitHandler = async (e) => {
        e.preventDefault();

        // Trim values from state instead of accessing e.target directly
        if (!email.trim() || !password.trim()) {
            toast.error("Please enter both email and password");
            return;
        }

        try {
            const result = await login(email.trim(), password.trim());
            
            if (result.success) {
                toast.success("Login successful!");
                navigate("/");
            } else {
                toast.error("Login failed. Please check your credentials.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
        }
    };

    return (
        <>
            <div className="rounded bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-2xl font-semibold">Login</h2>
                <form onSubmit={submitHandler}>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={onChangeHandler}
                        className="mb-4 w-full rounded border border-gray-300 p-2 focus:border-gray-500 focus:outline-none"
                        placeholder="Enter your email"
                    />
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={onChangeHandler}
                        className="mb-4 w-full rounded border border-gray-300 p-2 focus:border-gray-500 focus:outline-none"
                        placeholder="Enter your password"
                        autoComplete="new-password"
                    />
                    <button type="submit" className="w-full rounded bg-black p-2 text-white">
                        Login
                    </button>

                    <ToastContainer />
                </form>
            </div>
        </>
    );
}

export default Login;
