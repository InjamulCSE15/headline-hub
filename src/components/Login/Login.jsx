import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProviders';
import toast from 'react-hot-toast';
export const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { signIn } = useContext(AuthContext);

    const handleLogin = async (e) => {
        setLoading(true);
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            const user = await signIn(email, password);
            e.target.reset();
            toast.success(' Login Successfully');
            setLoading(false);
            navigate('/'); 
        }
        catch (error) {
            toast.error(error.message);
            setLoading(false);
        }
    }

    const showPassword = () => {
        const passwordInput = document.getElementById('password');
        if (passwordInput) {
            passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
        }
    };


    return (
        <div className="container flex flex-col mx-auto bg-white ">
            <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                <div className="flex items-center justify-center w-full lg:px-12 lg:my-6">
                    <div className="flex items-center p-5 xl:p-10 my-8 border rounded-xl bg-white">
                        <form onSubmit={handleLogin} className="flex flex-col w-full h-full pb-6 text-center bg-white">
                            <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                                Sign In
                            </h3>
                            <p className="mb-4 text-grey-700">Enter your email and password</p>

                            <label
                                htmlFor="email"
                                className="mb-2 text-sm text-start text-grey-900"
                            >
                                Email*
                            </label>
                            <input required
                                name='email'
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
                                name='password'
                                id="password"
                                type="password"
                                placeholder="Enter a password"
                                className="flex items-center border w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                            />
                            <div className="flex flex-row items-center justify-between mb-8">
                                <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        defaultChecked=""
                                        defaultValue=""
                                        className="sr-only peer"
                                    />
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text order-1 ml-2">See password</span>
                                            <input type="checkbox" onClick={showPassword} className="checkbox checkbox-primary" />
                                        </label>
                                    </div>

                                </label>
                                <a
                                    href="#"
                                    className="mr-4 text-sm font-medium text-primary"
                                >
                                    Forget password?
                                </a>
                            </div>
                            <button className="w-full px-6 py-3 mb-5 text-base sm:text-xl font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl bg-primary hover:bg-blue-800  border border-primary">
                                {
                                    loading ? <span className="loading loading-spinner text-white"></span> 
                                        : 
                                        <span> Sign In</span>
                                }
                                
                            </button>
                            <p className="text-sm leading-relaxed text-grey-900">
                                Not registered yet?{" "}
                                <Link to="/register" className="font-bold text-primary">
                                    Create an Account
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
