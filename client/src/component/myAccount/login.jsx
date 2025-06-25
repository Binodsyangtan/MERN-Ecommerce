import React, { useContext, useState } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import AppContext from '../../context/AppContext';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';

function Login() {
    const navigate = useNavigate();
    const { login } = useContext(AppContext);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const { email, password } = formData;

    const submitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!email.trim()) {
            toast.error("Please enter your email");
            setIsLoading(false);
            return;
        }

        if (!password.trim()) {
            toast.error("Please enter your password");
            setIsLoading(false);
            return;
        }

        try {
            const result = await login(email.trim(), password.trim());

            if (result.success) {
                // toast.success("Login successful!");
                navigate("/");
            } else {
                toast.error(result.message || "Login failed. Please check your credentials.");
            }
        } catch (error) {
            toast.error(error.message || "An error occurred. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (

        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
                <p className="text-gray-600">Sign in to your account</p>
            </div>

            <form onSubmit={submitHandler} className="space-y-6">
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <FiMail className="text-gray-400" />
                        </div>
                        <input
                            name="email"
                            type="email"
                            value={email}
                            onChange={onChangeHandler}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <FiLock className="text-gray-400" />
                        </div>
                        <input
                            name="password"
                            type="password"
                            value={password}
                            onChange={onChangeHandler}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="••••••••"
                            required
                            autoComplete="current-password"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                        <div className="flex h-5 items-center">
                            <input
                                id="remember"
                                aria-describedby="remember"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <Link
                        to="/forgot-password"
                        className="text-sm font-medium text-blue-600 hover:underline"
                    >
                        Forgot password?
                    </Link>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {isLoading ? (
                        <span className="flex items-center justify-center">
                            <svg className="mr-3 h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                        </span>
                    ) : (
                        <span className="flex items-center justify-center">
                            <FiLogIn className="mr-2" />
                            Login
                        </span>
                    )}
                </button>

                <p className="text-center text-sm text-gray-500">
                    Don't have an account?{' '}
                    <Link to="/register" className="font-medium text-blue-600 hover:underline">
                        Sign up
                    </Link>
                </p>
            </form>

            Email: ram@gmail.com
            pw: 123456 (just to check)

        </div>



    );
}

export default Login;