import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { authRequestApi } from "../../redux/requests";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { IoIosMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginForm() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChangeInput = (e, type) => {
        const previouState = { ...formData };
        previouState[type] = e.target.value;
        setFormData(previouState);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        authRequestApi.loginUser(formData, dispatch, navigate);
    };

    return (
        <form
            className="w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4"
            onSubmit={handleSubmit}
        >
            <div className="flex items-center justify-center gap-4 bg-white rounded-md w-full px-4 py-2">
                <span>
                    <IoIosMail className="text-2xl" />
                </span>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full h-full bg-transparent text-headingColor text-lg border-none outline-none px-2 py-2"
                    value={formData.email}
                    onChange={(e) => handleChangeInput(e, "email")}
                />
            </div>
            <div className="flex items-center justify-center gap-4 bg-white rounded-md w-full px-4 py-2">
                <span>
                    <RiLockPasswordFill className="text-2xl" />
                </span>
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full h-full bg-transparent text-headingColor text-lg border-none outline-none px-2 py-2"
                    value={formData.password}
                    onChange={(e) => handleChangeInput(e, "password")}
                />
                {showPassword ? (
                    <span>
                        <FaEye
                            className="text-2xl"
                            onClick={() => setShowPassword(false)}
                            role="button"
                        />
                    </span>
                ) : (
                    <span>
                        <FaEyeSlash
                            className="text-2xl"
                            onClick={() => setShowPassword(true)}
                            role="button"
                        />
                    </span>
                )}
            </div>
            <p className="text-md">
                Don't have an account{" "}
                <Link to={"/sign-up"}>
                    <motion.button
                        className="underline text-red-400"
                        whileTap={{ scale: 0.95 }}
                    >
                        Create here
                    </motion.button>
                </Link>
            </p>
            <button
                type="submit"
                className="w-full text-lg text-white bg-red-300 capitalize hover:bg-red-400 transition-all duration-150 rounded px-4 py-2"
            >
                Login
            </button>
        </form>
    );
}
