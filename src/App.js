import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Home from "./page/Home";

function App() {
    return (
        <div className="min-h-screen h-auto flex flex-col items-center justify-center">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
