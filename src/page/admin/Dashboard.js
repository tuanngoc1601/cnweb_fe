import React from "react";
import DBLeftSection from "../../component/Admin/DBLeftSection";
import DBRightSection from "../../component/Admin/DBRightSection";

const Dashboard = () => {
    return (
        <div className="w-full h-screen flex items-center bg-primary">
            <DBLeftSection />
            <DBRightSection />
        </div>
    );
};

export default Dashboard;
