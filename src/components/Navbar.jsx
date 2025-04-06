import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between">
            <div></div>
            <nav>
                <ul className="flex items-center gap-4 space-x-4">
                    <li><Link>Home</Link></li>
                    <li><Link>Career</Link></li>
                    <li><Link>About</Link></li>
                </ul> 
            </nav>
            <Link to={'/auth/login'} className="btn btn-neutral text-white rounded-none btn-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            Login</Link>
        </div>
    );
};

export default Navbar;