import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaImage } from "react-icons/fa";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        photoUrl: "",
        email: "",
        password: "",
        termsAccepted: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 md:p-16 rounded-none shadow-sm w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">Register your account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Your Name</label>
                        <div className="flex items-center border border-gray-300 rounded-sm p-4">
                            <FaUser className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="flex-1 outline-none bg-transparent"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Photo URL</label>
                        <div className="flex items-center border border-gray-300 rounded-sm p-4">
                            <FaImage className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                name="photoUrl"
                                placeholder="Enter your photo URL"
                                className="flex-1 outline-none bg-transparent"
                                value={formData.photoUrl}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Email</label>
                        <div className="flex items-center border border-gray-300 rounded-sm p-4">
                            <FaEnvelope className="text-gray-400 mr-2" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                className="flex-1 outline-none bg-transparent"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium">Password</label>
                        <div className="flex items-center border border-gray-300 rounded-sm p-4">
                            <FaLock className="text-gray-400 mr-2" />
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="flex-1 outline-none bg-transparent"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-6 flex items-center">
                        <input
                            id="termsAccepted"
                            type="checkbox"
                            name="termsAccepted"
                            className="checkbox checkbox-md mr-2 cursor-pointer"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                            required
                        />
                        <label className="text-gray-700 cursor-pointer" for='termsAccepted'>
                            Accept <span className="font-semibold">Term & Conditions</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white py-2 rounded-sm btn-lg hover:bg-gray-900 transition"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
