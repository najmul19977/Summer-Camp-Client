import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));

    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to=''>Home</Link></li>
                        <li><Link to='ourclass'>Our Class</Link></li>

                        <li><Link to='instructor'>Our Instructor</Link></li>
                        <li><Link to='deshbord'>Deshbord</Link></li>
                        <li><Link to='secret'>Secrete</Link></li>

                        {
                            user ? <>
                                <button onClick={handleLogOut} className="btn btn-active btn-ghost">LogOut</button>
                            </> : <>
                                <li><Link to='login'>Login</Link></li>
                            </>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Summer <span className="text-red-500">Camp</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to=''>Home</Link></li>
                    <li><Link to='ourclass'>Our Class</Link></li>

                    <li><Link to='instructor'>Our Instructor</Link></li>
                    <li><Link to='deshbord'>Deshbord</Link></li>
                    <li><Link to='secret'>Secrete</Link></li>
                    {
                        user ? <>
                            <div className="avatar">
                                <div className="w-10 h-10 ml-4 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            <button onClick={handleLogOut} className="btn btn-active btn-ghost">LogOut</button>
                        </> : <>
                            <li><Link to='login'>Login</Link></li>
                        </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavBar;