import React from "react";
import { motion } from "framer-motion";
import { HiCurrencyRupee } from "react-icons/hi2";
import { IoBasket } from "react-icons/io5";

const SliderCard = ({ data }) => {
    return (
        <div className="bg-white hover:drop-shadow-lg backdrop-blur-md rounded-xl flex items-center justify-between relative px-4 py-2 w-full md:w-340 md:min-w-350 gap-3">
            <img
                src={data.imageURL}
                alt=""
                className="w-40 h-40 object-contain"
            />
            <div className="relative pt-12">
                <p className="text-xl text-headingColor font-semibold">
                    {data.product_name}
                </p>
                <p className="text-lg font-semibold text-red-500 flex items-center justify-center gap-1">
                    <HiCurrencyRupee className="text-red-500" />{" "}
                    {parseFloat(data.product_price).toFixed(2)}
                </p>
                <motion.div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center absolute -top-4 right-2 cursor-pointer">
                    <IoBasket className="text-2xl text-primary" />
                </motion.div>
            </div>
        </div>
    );
};

export default SliderCard;
