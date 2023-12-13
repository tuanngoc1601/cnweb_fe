import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authRequestApi } from "../../redux/requests";
import { motion } from "framer-motion";
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import {
    FaEye,
    FaEyeSlash,
    FaAddressBook,
    FaPhone,
    FaTransgenderAlt,
} from "react-icons/fa";
import { MdConfirmationNumber } from "react-icons/md";
import { FaUser, FaCircleUser } from "react-icons/fa6";

export default function SignUp() {
    const [formData, setFormData] = React.useState({
        email: "",
        firstName: "",
        lastName: "",
        username: "",
        address: "",
        phone: "",
        gender: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = React.useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChangeSignupForm = (e, type) => {
        const previouState = { ...formData };
        previouState[type] = e.target.value;
        setFormData(previouState);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        authRequestApi.registerUser(formData, dispatch, navigate);
    };

    return (
        <form
            className="w-full flex flex-col items-center justify-center gap-4 px-4 md:px-12 py-4"
            onSubmit={handleSubmit}
        >
            <div className="flex items-center justify-center gap-4 bg-white rounded-md w-full px-4 py-1">
                <span>
                    <IoIosMail className="text-xl" />
                </span>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full h-full bg-transparent text-headingColor text-lg border-none outline-none px-2 py-2"
                    value={formData.email}
                    onChange={(e) => handleChangeSignupForm(e, "email")}
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center gap-4 bg-white rounded-md w-full px-4 py-1">
                    <span>
                        <FaUser className="text-xl" />
                    </span>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-full h-full bg-transparent text-headingColor text-lg border-none outline-none px-2 py-2"
                        value={formData.firstName}
                        onChange={(e) => handleChangeSignupForm(e, "firstName")}
                    />
                </div>
                <div className="flex items-center justify-center gap-4 bg-white rounded-md w-full px-4 py-1">
                    <span>
                        <FaUser className="text-xl" />
                    </span>
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full h-full bg-transparent text-headingColor text-lg border-none outline-none px-2 py-2"
                        value={formData.lastName}
                        onChange={(e) => handleChangeSignupForm(e, "lastName")}
                    />
                </div>
            </div>
            <div className="flex items-center justify-center gap-4 bg-white rounded-md w-full px-4 py-1">
                <span>
                    <FaCircleUser className="text-xl" />
                </span>
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full h-full bg-transparent text-headingColor text-lg border-none outline-none px-2 py-2"
                    value={formData.username}
                    onChange={(e) => handleChangeSignupForm(e, "username")}
                />
            </div>
            <div className="flex items-center justify-center gap-4 bg-white rounded-md w-full px-4 py-1">
                <span>
                    <FaAddressBook className="text-xl" />
                </span>
                <input
                    type="text"
                    placeholder="Address"
                    className="w-full h-full bg-transparent text-headingColor text-lg border-none outline-none px-2 py-2"
                    value={formData.address}
                    onChange={(e) => handleChangeSignupForm(e, "address")}
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center gap-4 bg-white rounded-md w-full px-4 py-1">
                    <span>
                        <FaPhone className="text-xl" />
                    </span>
                    <input
                        type="text"
                        placeholder="Phone"
                        className="w-full h-full bg-transparent text-headingColor text-lg border-none outline-none px-2 py-2"
                        value={formData.phone}
                        onChange={(e) => handleChangeSignupForm(e, "phone")}
                    />
                </div>
                <div className="flex items-center justify-center gap-4 bg-white rounded-md w-full px-4 py-1">
                    <span>
                        <FaTransgenderAlt className="text-xl" />
                    </span>
                    <select
                        id="gender"
                        value={formData.gender}
                        required
                        className="w-full h-full bg-transparent text-headingColor text-lg border-none outline-none px-2 py-2"
                        onChange={(e) => handleChangeSignupForm(e, "gender")}
                    >
                        <option value="" disabled className="hidden">
                            Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div className="flex items-center justify-center gap-4 bg-white rounded-md w-full px-4 py-1">
                <span>
                    <RiLockPasswordFill className="text-xl" />
                </span>
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full h-full bg-transparent text-headingColor text-lg border-none outline-none px-2 py-2"
                    value={formData.password}
                    onChange={(e) => handleChangeSignupForm(e, "password")}
                />
                {showPassword ? (
                    <span>
                        <FaEye
                            className="text-xl"
                            onClick={() => setShowPassword(false)}
                            role="button"
                        />
                    </span>
                ) : (
                    <span>
                        <FaEyeSlash
                            className="text-xl"
                            onClick={() => setShowPassword(true)}
                            role="button"
                        />
                    </span>
                )}
            </div>
            <div className="flex items-center justify-center gap-4 bg-white rounded-md w-full px-4 py-1">
                <span>
                    <MdConfirmationNumber className="text-xl" />
                </span>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full h-full bg-transparent text-headingColor text-lg border-none outline-none px-2 py-2"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                        handleChangeSignupForm(e, "confirmPassword")
                    }
                />
            </div>
            <p className="text-md">
                I have an account{" "}
                <Link to={"/login"}>
                    <motion.button
                        className="underline text-red-400"
                        whileTap={{ scale: 0.95 }}
                    >
                        Login here
                    </motion.button>
                </Link>
            </p>
            <button
                type="submit"
                className="w-full text-lg text-white bg-red-300 capitalize hover:bg-red-400 transition-all duration-150 rounded px-4 py-2"
            >
                SignUp
            </button>
        </form>
    );
}
