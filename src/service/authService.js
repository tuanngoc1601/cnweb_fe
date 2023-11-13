import { createAxiosBaseUrl, createAxiosClient } from "../axios";
import { logoutSuccess } from "../redux/authSlice";

const axiosClient = createAxiosBaseUrl();

const axiosClientLogout = createAxiosClient(logoutSuccess);

export const handleLoginService = (user) => {
    return axiosClient.post("/api/v1/auth/login", user);
};

export const handleRegisterService = (user) => {
    return axiosClient.post("/api/v1/auth/sign-up", user);
};

export const handleLogoutService = () => {
    return axiosClientLogout.post("/api/v1/auth/logout");
};
