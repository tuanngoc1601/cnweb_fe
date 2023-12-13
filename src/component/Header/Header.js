import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Logo, AvatarUser } from "../../assets";
import { isActiveStyles, isNotActiveStyles } from "../../utils/styles";
import { authRequestApi } from "../../redux/requests";

const Header = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const [isMenu, setIsMenu] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        authRequestApi.logoutUser(dispatch, navigate);
    }
    
    return (
        <header className="w-full fixed backdrop-blur-md z-50 insert-x-0 top-0 flex items-center justify-between px-12 md:px-20 py-6 shadow-sm">
            <NavLink
                to={"/"}
                className="flex items-center justify-center gap-4"
            >
                <img src={Logo} className="w-32" alt="" />
            </NavLink>
            <nav className="flex items-center justify-center gap-8">
                <ul className="hidden md:flex items-center justify-center gap-16">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? isActiveStyles : isNotActiveStyles
                        }
                        to={"/"}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? isActiveStyles : isNotActiveStyles
                        }
                        to={"/menu"}
                    >
                        Menu
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? isActiveStyles : isNotActiveStyles
                        }
                        to={"/services"}
                    >
                        Services
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? isActiveStyles : isNotActiveStyles
                        }
                        to={"/about"}
                    >
                        About Us
                    </NavLink>
                </ul>
                <motion.div className="relative cursor-pointer">
                    <FaShoppingCart className="text-3xl text-textColor" />
                    <div className="h-6 w-6 rounded-full bg-red-500 flex items-center justify-center absolute -top-4 -right-1">
                        <p className="text-primary text-base font-semibold">
                            2
                        </p>
                    </div>
                </motion.div>
                {user ? (
                    <>
                        <div
                            className="relative cursor-pointer"
                            onMouseEnter={() => setIsMenu(true)}
                        >
                            <div className="w-12 h-12 rounded-full shadow-md cursor-pointer overflow-hidden flex items-center justify-center">
                                <motion.img
                                    className="w-full f-full object-cover "
                                    src={AvatarUser}
                                    whileHover={{ scale: 1.15 }}
                                    referrerPolicy="no-referer"
                                />
                            </div>
                            {isMenu && (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 30 }}
                                    onMouseLeave={() => setIsMenu(false)}
                                    className="px-6 py-4 w-48 bg-white backdrop-blur-md rounded-md shadow-md absolute top-12 right-0 flex flex-col gap-4"
                                >
                                    <Link
                                        to={"/dashboard/home"}
                                        className="hover:text-red-500 text-xl text-textColor "
                                    >
                                        Dashboard
                                    </Link>
                                    <Link
                                        to={"/profile"}
                                        className="hover:text-red-500 text-xl text-textColor "
                                    >
                                        My Profile
                                    </Link>
                                    <Link
                                        to={"/user-orders"}
                                        className="hover:text-red-500 text-xl text-textColor "
                                    >
                                        Orders
                                    </Link>
                                    <hr />
                                    <motion.div onClick={handleLogout} className="group flex items-center justify-center px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 gap-3">
                                        <MdLogout className="text-2xl text-textColor group-hover::text-headingColor" />
                                        <p className="text-textColor text-xl group-hover:text-headingColor">
                                            Sign Out
                                        </p>
                                    </motion.div>
                                </motion.div>
                            )}
                        </div>
                    </>
                ) : (
                    <NavLink to={"/login"}>
                        <motion.button className="px-4 py-2 rounded-md shadow-md bg-lightOverlay border border-red-300 cursor-pointer">
                            Login
                        </motion.button>
                    </NavLink>
                )}
            </nav>
        </header>
    );
};

export default Header;
