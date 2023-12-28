import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import { cartService, orderService } from "../service";
import { cartRequestApi } from "../redux/requests";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";

const Checkout = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const cart = useSelector((state) => state.cart.carts.data);
    const [total, setTotal] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        let tot = 0;
        if (cart) {
            cart.map((data) => {
                tot = tot + data["Product.price"] * data.quantity;
            });
            setSubTotal(tot);
            setTotal(tot + 10.52);
        }
    }, [cart]);

    const [cardInfo, setCardInfo] = useState({
        card_number: "",
        card_name: "",
        expiration_date: "",
    });

    const handleOnChange = (e, type) => {
        const previouState = { ...cardInfo };
        previouState[type] = e.target.value;
        setCardInfo(previouState);
    };

    const handleSubmitOrder = async () => {
        const orderDetails = {
            address: user?.address,
            total: total,
            cart: cart,
        }
        await orderService.handleOrderSubmitService(user?.id, orderDetails);
        cartRequestApi.getAllCarts(user?.id, dispatch);
        navigate("/cart/payment-success");
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-start flex-col bg-primary">
            <Header />
            <div className="w-full flex flex-row items-start justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
                <div className="w-1/2 p-2 px-4">
                    <h3 className="text-xl tracking-wide text-textCheckout font-semibold">
                        Shipping Information
                    </h3>
                    <div className="w-full mt-4">
                        <label>Email address</label>
                        <input
                            type="text"
                            placeholder="email"
                            value={user?.email}
                            className="w-full h-full bg-white rounded-lg text-headingColor text-lg border border-secondary px-4 py-2"
                            disabled
                        />
                    </div>
                    <div className="w-full grid grid-cols-2 gap-4 mt-4">
                        <div className="flex flex-col items-start justify-center rounded-md w-full py-1">
                            <label>First Name</label>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full h-full bg-white text-headingColor text-lg border border-secondary rounded-lg px-4 py-2"
                                value={user?.firstName}
                                disabled
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center rounded-md w-full py-1">
                            <label>Last Name</label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full h-full bg-white text-headingColor text-lg border border-secondary rounded-lg px-4 py-2"
                                value={user?.lastName}
                                disabled
                            />
                        </div>
                    </div>
                    <div className="w-full mt-4">
                        <label>Phone number</label>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={user?.phone}
                            className="w-full h-full bg-white rounded-lg text-headingColor text-lg border border-secondary px-4 py-2"
                            disabled
                        />
                    </div>
                    <div className="w-full mt-4">
                        <label>Address</label>
                        <input
                            type="text"
                            placeholder="Address"
                            value={user?.address}
                            className="w-full h-full bg-white rounded-lg text-headingColor text-lg border border-secondary px-4 py-2"
                            disabled
                        />
                    </div>
                    <div className="w-full h-0.5 bg-secondary mt-8"></div>
                    <h3 className="text-xl tracking-wide text-textCheckout font-semibold mt-4">
                        Payment
                    </h3>
                    <div className="w-full mt-4">
                        <label>Card number</label>
                        <input
                            type="text"
                            placeholder="Card number"
                            value={cardInfo.card_number}
                            className="w-full h-full bg-white rounded-lg text-headingColor text-lg border border-secondary px-4 py-2"
                            onChange={(e) => handleOnChange(e, "card_number")}
                        />
                    </div>
                    <div className="w-full mt-4">
                        <label>Name on card</label>
                        <input
                            type="text"
                            placeholder="Card number"
                            value={cardInfo.card_name}
                            className="w-full h-full bg-white rounded-lg text-headingColor text-lg border border-secondary px-4 py-2"
                            onChange={(e) => handleOnChange(e, "card_name")}
                        />
                    </div>
                    <div className="w-full mt-4">
                        <label>Expiration date (MM/YY)</label>
                        <input
                            type="text"
                            placeholder="MM/YY"
                            value={cardInfo.expiration_date}
                            className="w-full h-full bg-white rounded-lg text-headingColor text-lg border border-secondary px-4 py-2"
                            onChange={(e) =>
                                handleOnChange(e, "expiration_date")
                            }
                        />
                    </div>
                </div>
                <div className="w-1/2">
                    <h3 className="text-xl tracking-wide text-textCheckout font-semibold">
                        Order summary
                    </h3>
                    <div className="w-full bg-white border rounded-xl mt-4 divide-y">
                        <div className="w-full p-2 divide-y">
                            {cart &&
                                cart.length > 0 &&
                                cart.map((item, index) => (
                                    <OrderItem key={index} data={item} />
                                ))}
                        </div>
                        <div className="p-2 divide-y">
                            <div className="flex flex-col px-4 py-2 gap-6">
                                <p className="flex justify-between items-center text-lg">
                                    <span>Subtotal</span>
                                    <span>
                                        ${parseFloat(subTotal).toFixed(2)}
                                    </span>
                                </p>
                                <p className="flex justify-between items-center text-lg">
                                    <span>Shipping</span>
                                    <span>$5.00</span>
                                </p>
                                <p className="flex justify-between items-center text-lg">
                                    <span>Taxes</span>
                                    <span>$5.52</span>
                                </p>
                            </div>
                            <div className="px-4 py-2">
                                <p className="flex justify-between items-center text-xl font-semibold my-4">
                                    <span>Total</span>
                                    <span>${parseFloat(total).toFixed(2)}</span>
                                </p>
                            </div>
                        </div>
                        <div className="px-6 py-6">
                            <button
                                className="w-full py-3 bg-buttonBg rounded-lg text-white text-xl"
                                onClick={handleSubmitOrder}
                            >
                                Confirm order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

const OrderItem = ({ data }) => {
    const user = useSelector((state) => state.auth.login.currentUser);
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

    const deleteCartItem = async () => {
        await cartService.handleDeleteCartItemService(
            user?.id,
            data?.product_id
        );
        cartRequestApi.getAllCarts(user?.id, dispatch);
    };

    return (
        <div className="bg-white flex flex-row items-center py-2 px-4">
            <img
                src={data["Product.imageURL"]}
                alt=""
                className="w-28 h-28 object-contain"
            />
            <div className="w-full flex flex-col gap-3 px-2">
                <div className="flex flex-row items-start justify-between">
                    <div>
                        <p className="font-semibold">{data["Product.name"]}</p>
                        <p>{data["Product.Category.name"]}</p>
                    </div>
                    <span
                        className="w-6 h-6 cursor-pointer hover:opacity-60"
                        onClick={deleteCartItem}
                    >
                        <MdDelete className="text-2xl text-iconColor" />
                    </span>
                </div>
                <div className="w-full flex flex-row items-end justify-between">
                    <p>
                        ${" "}
                        {parseFloat(
                            data["Product.price"] * data.quantity
                        ).toFixed(2)}
                    </p>
                    <div className="flex flex-row jusify-center items-center gap-3">
                        <motion.div
                            className="w-7 h-7 flex items-center justify-center rounded-md drop-shadow-md bg-zinc-900 cursor-pointer"
                            onClick={() => decrementCart(data?.product_id)}
                        >
                            <p className="text-xl font-semibold text-primary">
                                -
                            </p>
                        </motion.div>
                        <p className="text-lg text-headingColor font-semibold">
                            {data?.quantity}
                        </p>
                        <motion.div
                            className="w-7 h-7 flex items-center justify-center rounded-md drop-shadow-md bg-zinc-900 cursor-pointer"
                            onClick={() => incrementCart(data?.product_id)}
                        >
                            <p className="text-xl font-semibold text-primary">
                                +
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
