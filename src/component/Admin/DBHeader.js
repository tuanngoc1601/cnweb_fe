import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { authRequestApi } from "../../redux/requests";
import { AvatarUser } from "../../assets";
import { IoMdSearch } from "react-icons/io";
import { BsToggles2, BsFillBellFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";

const DBHeader = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        authRequestApi.logoutUser(dispatch, navigate);
    }

    return (
        <div className="w-full flex items-center justify-between px-8 gap-3">
            <p className="text-2xl text-headingColor">
                Welcome to PizzaHut
                {user?.username && (
                    <span className="block text-base text-gray-500">{`Hello ${user?.username} ...!`}</span>
                )}
            </p>
            <div className="flex items-center justify-center gap-4">
                <div className="flex items-center justify-center gap-3 px-4 py-2 bg-lightOverlay backdrop-blur-md rounded-md shadow-md">
                    <IoMdSearch className="text-gray-400 text-2xl" />
                    <input
                        type="text"
                        placeholder="Search Here..."
                        className="border-none outline-none bg-transparent w-32 text-base font-semibold text-textColor"
                    />
                    <BsToggles2 className="text-gray-400 text-2xl" />
                </div>
                <motion.div className="w-10 h-10 rounded-md cursor-pointer bg-lightOverlay backdrop-blur-md shadow-md flex items-center justify-center">
                    <BsFillBellFill className="text-gray-400 text-xl" />
                </motion.div>
                <div className="flex items-center justify-center gap-2">
                    <div className="w-10 h-10 rounded-md shadow-md cursor-pointer overflow-hidden">
                        <motion.img
                            className="w-full h-full object-cover"
                            src={AvatarUser}
                            whileHover={{ scale: 1.15 }}
                            referrerPolicy="no-referrer"
                        ></motion.img>
                    </div>
                    <motion.div
                        className="w-10 h-10 rounded-md cursor-pointer bg-lightOverlay backdrop-blur-md shadow-md flex items-center justify-center"
                        onClick={handleLogout}
                    >
                        <MdLogout className="text-gray-400 text-xl" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default DBHeader;
