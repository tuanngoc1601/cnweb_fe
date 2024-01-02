import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import HomePage from "../component/Home/HomePage";
import HomeSlider from "../component/Home/HomeSlider";
import FilterSection from "../component/Home/FilterSection";
import Cart from "../component/Home/Cart";
import { productRequestApi, cartRequestApi } from "../redux/requests";

const Home = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.login.currentUser); 
    const [isOpenCart, setIsOpenCart] = useState(false);

    useEffect(() => {
        productRequestApi.getAllProducts(dispatch);
        productRequestApi.getAllCategories(dispatch);
        if(user) {
            const userId = user.id;
            cartRequestApi.getAllCarts(userId, dispatch);
        }
    }, []);

    return (
        <main className="w-full min-h-screen flex items-center justify-start flex-col bg-primary">
            <Header setIsOpenCart={setIsOpenCart} />
            <div className="w-full flex flex-col items-start justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
                <HomePage />
                <HomeSlider />
                <FilterSection />
            </div>
            <Footer />
            {isOpenCart && <Cart setIsOpenCart={setIsOpenCart} />}
        </main>
    );
};

export default Home;
