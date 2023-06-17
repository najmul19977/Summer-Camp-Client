import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaReadme, FaChalkboard, FaUsers } from 'react-icons/fa';
import useAdmin from "../../Hooks/useAdmin";



const Deshbord = () => {

    //TODO:
    //const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

                    {
                        isAdmin ? <>
                            <li><Link to='/deshbord/home'><FaHome></FaHome>Admin Home</Link></li>
                            <li><Link to='/deshbord/addclass'><FaShoppingCart></FaShoppingCart> Add Class</Link></li>
                            <li><Link to='/deshbord/manageclass'><FaCalendarAlt></FaCalendarAlt>Manage Class</Link> </li>
                            <li><Link to='/deshbord/allusers'><FaUsers></FaUsers>Manage User</Link> </li>

                        </> : <>
                            <li><Link to='/deshbord/home'><FaHome></FaHome>User Home</Link></li>
                            <li><Link to='/deshbord/myclass'><FaShoppingCart></FaShoppingCart> My Class</Link></li>
                            <li><Link to='/deshbord/history'><FaWallet></FaWallet>Payment History</Link></li>
                            <li><Link to='/deshbord/reservations'><FaCalendarAlt></FaCalendarAlt>Reservations</Link> </li>

                        </>
                    }

                    <div className="divider"></div>
                    <li><Link to="/"><FaHome></FaHome>Home</Link></li>
                    <li><Link to="/ourclass"><FaReadme></FaReadme>Our Class</Link></li>
                    <li><Link to="/instructor"><FaChalkboard></FaChalkboard>Our Instructor</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Deshbord;