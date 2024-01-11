import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Home from "./page/Home";
import Category from "./page/Category";
import Checkout from "./page/Checkout";
import About from "./page/About";
import PaymentSuccess from "./page/PaymentSuccess";
import FootDetail from "./page/FootDetail";
import Dashboard from "./page/admin/Dashboard";
import NotFound404 from "./page/NotFound404";

function App() {
    return (
        <div className="min-h-screen h-auto flex flex-col items-center justify-center">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route exact path="/" element={<Home />} />
                <Route path="/categories/:categoryId" element={<Category />} />
                <Route path="/cart/checkout" element={<Checkout />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart/payment-success" element={<PaymentSuccess />} />
                <Route path="/products/:productId" element={<FootDetail />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/*" element={<NotFound404 />} />
            </Routes>
        </div>
    );
}

export default App;
