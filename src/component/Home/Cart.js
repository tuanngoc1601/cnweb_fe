import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cartService } from "../../service";
import { cartRequestApi } from "../../redux/requests";
import { EmptyCart } from "../../assets";
import { FiChevronsRight } from "react-icons/fi";
import { FcClearFilters } from "react-icons/fc";
import { HiCurrencyRupee } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";

const Cart = ({ setIsOpenCart }) => {
    const [total, setTotal] = useState(0);
    const cart = useSelector((state) => state.cart.carts.data);

    useEffect(() => {
        let tot = 0;
        if (cart) {
            cart.map((data) => {
                tot = tot + data["Product.price"] * data.quantity;
            });
            setTotal(tot);
        }
    }, [cart]);

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            className="fixed z-50 top-0 right-0 w-300 md:w-508 bg-lightOverlay backdrop-blur-md shadow-md h-screen"
        >
            <div className="w-full flex items-center justify-between py-4 pb-12 px-6">
                <motion.i
                    className="cursor-pointer"
                    onClick={() => setIsOpenCart(false)}
                >
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
                        <div className="bg-zinc-800 rounded-t-[60px] w-full h-[35%] flex flex-row items-center justify-center px-4 py-6 gap-24">
                            <div className="w-full flex items-center justify-evenly mb-20">
                                <p className="text-3xl text-zinc-500 font-semibold">
                                    Total
                                </p>
                                <p className="text-3xl text-orange-500 font-semibold flex items-center justify-center gap-1">
                                    <HiCurrencyRupee className="text-primary" />
                                    {parseFloat(total).toFixed(2)}
                                </p>
                                <Link to={"/cart/checkout"}>
                                    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">
                                        Order
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="w-full h-full flex flex-col gap-10 justify-center items-center">
                        <img src={EmptyCart} alt="" className="w-60" />
                        <h1 className="text-3xl text-primary font-bold">
                            Empty Cart
                        </h1>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export const CartItemCard = ({ index, data }) => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const cart = useSelector((state) => state.cart.carts.data);
    const [itemTotal, setItemTotal] = useState(0);
    const dispatch = useDispatch();

    const decrementCart = async (productId) => {
        await cartService.handleUpdateCartService(
            user?.id,
            productId,
            "decrement"
        );
        cartRequestApi.getAllCarts(user?.id, dispatch);
    };

    const incrementCart = async (productId) => {
        await cartService.handleUpdateCartService(
            user?.id,
            productId,
            "increment"
        );
        cartRequestApi.getAllCarts(user?.id, dispatch);
    };

    useEffect(() => {
        setItemTotal(data["Product.price"] * data.quantity);
    }, [cart, itemTotal]);

    return (
        <motion.div className="w-full flex items-center justify-start bg-zinc-800 rounded-md drop-shadow-md px-4 gap-4">
            <img
                src={data["Product.imageURL"]}
                alt=""
                className="w-24 min-w-[94px] h-24 object-contain"
            />
            <div className="flex items-center justify-start gap-1 w-full">
                <p className="text-lg text-primary font-semibold">
                    {data["Product.name"]}
                    <span className="text-sm block capitalize text-gray-400">
                        {data["Product.Category.name"]}
                    </span>
                </p>
                <p className="text-sm flex items-center justify-center gap-1 font-semibold text-red-400 ml-auto">
                    <HiCurrencyRupee className="text-red-400" /> {itemTotal}
                </p>
            </div>
            <div className="ml-auto flex items-center justify-center gap-3">
                <motion.div
                    className="w-8 h-8 flex items-center justify-center rounded-md drop-shadow-md bg-zinc-900 cursor-pointer"
                    onClick={() => decrementCart(data?.product_id)}
                >
                    <p className="text-xl font-semibold text-primary">-</p>
                </motion.div>
                <p className="text-lg text-primary font-semibold">
                    {data?.quantity}
                </p>
                <motion.div
                    className="w-8 h-8 flex items-center justify-center rounded-md drop-shadow-md bg-zinc-900 cursor-pointer"
                    onClick={() => incrementCart(data?.product_id)}
                >
                    <p className="text-xl font-semibold text-primary">+</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Cart;
