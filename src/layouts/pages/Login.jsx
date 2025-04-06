import React, { useState } from 'react';
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Email:", email, "Password:", password);
    };
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 md:p-16 rounded-none shadow-sm w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">Login your account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Email address</label>
                        <div className="flex items-center border border-gray-300 rounded-sm p-4">
                            <FaEnvelope className="text-gray-400 mr-2" />
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 outline-none bg-transparent"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium">Password</label>
                        <div className="flex items-center border border-gray-300 rounded-sm p-4">
                            <FaLock className="text-gray-400 mr-2" />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="flex-1 outline-none bg-transparent"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white py-2 rounded-sm btn-lg hover:bg-gray-900 transition"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Don’t Have An Account? <Link to={'/auth/register'} className="text-red-500 cursor-pointer">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;