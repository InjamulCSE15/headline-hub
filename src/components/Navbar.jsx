import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import toast from "react-hot-toast";

const Navbar = () => {
    const {user, signOutUser} = useContext(AuthContext);
    const handleLogout = () => {
        signOutUser()
        .then(()=> {
            toast.success('User logged out successfully');
        })
        .catch(err => {
            toast.error(err.message)    
        })
    }

    return (
        <div className="flex items-center justify-between">
            <h6 className="font-bold text-xl"> {user && user?.displayName} </h6>
            <nav>
                <ul className="flex items-center gap-4 space-x-4">
                    <li><Link>Home</Link></li>
                    <li><Link>Career</Link></li>
                    <li><Link>About</Link></li>
                </ul> 
            </nav>
            {
                user && user.email ? <button className="btn btn-neutral text-white rounded-none btn-md tooltip-bottom" data-tip="Click to Logout" onClick={handleLogout}>Logout</button> : 
                <Link to={'/auth/login'} className="btn btn-neutral text-white rounded-none btn-md">Login</Link>
            }             
        </div>
    );
};

export default Navbar;