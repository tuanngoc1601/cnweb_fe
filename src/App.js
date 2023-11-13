import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import HomePage from "./page/HomePage";
import Login from "./page/Login";
import Signup from "./page/Signup";
import ProductList from "./page/ProductList";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div
                style={{
                    backgroundColor: "#fff",
                    display: "flex",
                    position: "relative",
                    minHeight: "100vh",
                    flexDirection: "column",
                }}
            >
                <Header />
                <Box
                    style={{
                        width: "100%",
                        margin: "0 auto",
                    }}
                >
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/sign-up" element={<Signup />} />
                        <Route path="/all-products" element={<ProductList />} />
                    </Routes>
                </Box>
                <Footer />
            </div>
        </div>
    );
}

export default App;
