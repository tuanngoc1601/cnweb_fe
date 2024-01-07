import React from "react";
import { Link } from "react-router-dom";
import { cartService } from "../../service";
import { cartRequestApi } from "../../redux/requests";
import { motion } from "framer-motion";
import { HiCurrencyRupee } from "react-icons/hi2";
import { IoBasket } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const SliderCard = ({ data }) => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const dispatch = useDispatch();
    const sentToCart = async () => {
        await cartService.handleAddToCartService(user?.id, data.id);
        cartRequestApi.getAllCarts(user?.id, dispatch);
    };

    return (
        <div className="bg-white hover:drop-shadow-lg backdrop-blur-md rounded-xl flex items-center justify-between cursor-pointer relative px-4 py-2 w-full md:w-340 md:min-w-350 gap-3">
            <Link to={`/products/${data.id}`}>
                <img
                    src={data.imageURL}
                    alt=""
                    className="w-40 h-40 object-contain"
                />
            </Link>
            <div className="relative pt-12">
                <p className="text-xl text-headingColor font-semibold">
                    {data.name}
                </p>
                <p className="text-lg font-semibold text-red-500 flex items-center justify-center gap-1">
                    <HiCurrencyRupee className="text-red-500" />{" "}
                    {parseFloat(data.price).toFixed(2)}
                </p>
                <motion.div
                    className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center absolute -top-4 right-2 cursor-pointer"
                    onClick={sentToCart}
                >
                    <IoBasket className="text-2xl text-primary" />
                </motion.div>
            </div>
        </div>
    );
};

export default SliderCard;
