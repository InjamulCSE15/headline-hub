import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProviders';
import toast from 'react-hot-toast';

export const Register = () => {
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const user = await createUser(name, email, password);
            toast.success("User registered successfully");
            e.target.reset();
            navigate('/'); 
            // console.log("User registered successfully:", user);
        } catch (error) {
            console.error("Error during registration:", error);
            if (error.code === "auth/email-already-in-use") {
                toast.error("This email is already in use. Please try another.");
            } else {
                toast.error(error.message);
            }
        }
    };

    return (
        <div className="container flex flex-col mx-auto bg-white ">
            <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                <div className="flex items-center justify-center w-full lg:px-12 lg:my-6">
                    <div className="flex items-center p-5 xl:p-10 my-8 border rounded-xl bg-white">
                        <form onSubmit={handleRegister} className="flex flex-col w-full h-full pb-6 text-center bg-white">
                            <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                                Sign Up
                            </h3>
                            <p className="mb-4 text-grey-700">Enter your name, email and password</p>

                            <label
                                htmlFor="name"
                                className="mb-2 text-sm text-start text-grey-900"
                            >
                                Name*
                            </label>
                            <input required
                                name="name"
                                id="name"
                                type="text"
                                placeholder="Jhon Doe"
                                className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl border"
                            />
                            <label
                                htmlFor="email"
                                className="mb-2 text-sm text-start text-grey-900"
                            >
                                Email*
                            </label>
                            <input required
                                name="email"
                                id="email"
                                type="email"
                                placeholder="mail@loopple.com"
                                className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl border"
                            />
                            <label
                                htmlFor="password"
                                className="mb-2 text-sm text-start text-grey-900"
                            >
                                Password*
                            </label>
                            <input required
                                name="password"
                                id="password"
                                type="password"
                                placeholder="Enter a password"
                                className="flex items-center border w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                            />

                            <button className="w-full px-6 py-3 mb-5 text-base sm:text-xl font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl bg-primary hover:bg-white hover:text-primary border border-primary">
                                Sign Up
                            </button>
                            <p className="text-sm leading-relaxed text-grey-900">
                                Already registered?{" "}
                                <Link to="/login" className="font-bold text-primary">
                                    Sign In
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
