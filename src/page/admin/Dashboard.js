import React from "react";
import { useSelector } from "react-redux";
import DBLeftSection from "../../component/Admin/DBLeftSection";
import DBRightSection from "../../component/Admin/DBRightSection";
import NotFound404 from "../NotFound404";

const Dashboard = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    if (!user || !user?.is_admin) {
        return <NotFound404 />;
    }
    return (
        <div className="w-full h-screen flex items-center bg-primary">
            <DBLeftSection />
            <DBRightSection />
        </div>
    );
};

export default Dashboard;
