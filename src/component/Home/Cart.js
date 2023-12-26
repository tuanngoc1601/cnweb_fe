import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronsRight } from "react-icons/fi";
import { FcClearFilters } from "react-icons/fc";
import { HiCurrencyRupee } from "react-icons/hi2";

const Cart = () => {
    const [total, setTotal] = useState(0);
    const cart = [];

    useEffect(() => {
        let tot = 0;
        if(cart) {
            cart.map((data) => {
                tot = tot + data.product_price * data.quantity;
            });
            setTotal(tot);
        }
    }, [cart]);
    return (
        <motion.div className="fixed z-50 top-0 right-0 w-300 md:w-508 bg-lightOverlay backdrop-blur-md shadow-md h-screen">
            <div className="w-full flex items-center justify-center py-4 pb-12 px-6">
                <motion.i className="cursor-pointer">
                    <FiChevronsRight className="text-[50px] text-textColor" />
                </motion.i>
                <p className="text-2xl text-headingColor font-semibold">
                    Your Cart
                </p>
                <motion.i className="cursor-pointer">
                    <FcClearFilters className="text-[30px] text-textColor" />
                </motion.i>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start rounded-t-3xl bg-zinc-900 h-full py-6 gap-3 relative">
                {cart && cart?.length > 0 ? (
                    <>
                        <div className="flex flex-col w-full items-start justify-start gap-3 h-[65%] overflow-y-scroll scrollbar-none px-4">
                            {cart &&
                                cart.length > 0 &&
                                cart?.map((item, i) => (
                                    <CartItemCard
                                        key={i}
                                        index={i}
                                        data={item}
                                    />
                                ))}
                        </div>
                        <div className="bg-zinc-800 rounded-t-[60px] w-full h-[35%] flex flex-col items-center justify-center px-4 py-6 gap-24">
                            <div className="w-full flex items-center justify-evenly">
                                <p className="text-3xl text-zinc-500 font-semibold">
                                    Total
                                </p>
                                <p className="text-3xl text-orange-500 font-semibold flex items-center justify-center gap-1">
                                    <HiCurrencyRupee className="text-primary" />
                                    {total}
                                </p>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className="text-3xl text-primary font-bold">
                            Empty Cart
                        </h1>
                    </>
                )}
            </div>
        </motion.div>
    );
};

export const CartItemCard = ({ index, data }) => {
    const cart = [];
    const [itemTotal, setItemTotal] = useState(0);

    const decrementCart = (productId) => {};

    const incrementCart = (productId) => {};

    useEffect(() => {
        setItemTotal(data.product_price * data.quantity);
    }, [cart, itemTotal]);

    return (
        <motion.div className="w-full flex items-center justify-start bg-zinc-800 rounded-md drop-shadow-md px-4 gap-4">
            <img
                src={data.imageURL}
                alt=""
                className="w-24 min-w-[94px] h-24 object-contain"
            />
            <div className="flex items-center justify-start gap-1 w-full">
                <p className="text-lg text-primary font-semibold">
                    {data?.product_name}
                    <span className="text-sm block capitalize text-gray-400">
                        {data?.product_category}
                    </span>
                </p>
                <p className="text-sm flex items-center justify-center gap-1 font-semibold text-red-400 ml-auto">
                    <HiCurrencyRupee className="text-red-400" /> {itemTotal}
                </p>
            </div>
            <div className="ml-auto flex items-center justify-center gap-3">
                <motion.div
                    className="w-8 h-8 flex items-center justify-center rounded-md drop-shadow-md bg-zinc-900 cursor-pointer"
                    onClick={() => decrementCart(data?.productId)}
                >
                    <p className="text-xl font-semibold text-primary">-</p>
                </motion.div>
                <p className="text-lg text-primary font-semibold">
                    {data?.quantity}
                </p>
                <motion.div
                    className="w-8 h-8 flex items-center justify-center rounded-md drop-shadow-md bg-zinc-900 cursor-pointer"
                    onClick={() => incrementCart(data?.productId)}
                >
                    <p className="text-xl font-semibold text-primary">+</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Cart;
