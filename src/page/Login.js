import React from "react";
import LoginForm from "../component/Auth/LoginForm";
import { LoginBg, Logo } from "../assets";

const Login = () => {
    return (
        <div className="w-screen h-screen relative overflow-hidden flex">
            <img
                src={LoginBg}
                className="w-full h-full object-cover absolute top-0 left-0"
                alt="bg-login"
            />
            <div className="flex flex-col items-center justify-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6">
                <div className="flex items-center justify-center gap-4 w-full">
                    <img src={Logo} className="w-40" alt="logo" />
                </div>
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
