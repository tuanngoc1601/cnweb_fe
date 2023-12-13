import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import HomePage from "../component/Home/HomePage";
import HomeSlider from "../component/Home/HomeSlider";
import FilterSection from "../component/Home/FilterSection";

const Home = () => {
    return (
        <main className="w-full min-h-screen flex items-center justify-start flex-col bg-primary">
            <Header />
            <div className="w-full flex flex-col items-start justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
                <HomePage />
                <HomeSlider />
                <FilterSection />
            </div>
            <Footer />
        </main>
    );
};

export default Home;
