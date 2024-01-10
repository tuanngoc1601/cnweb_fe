import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Rating from "@mui/material/Rating";
import {
    cartRequestApi,
    productRequestApi,
    reviewRequestApi,
} from "../redux/requests";
import { cartService } from "../service";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import CommentModal from "../component/Home/CommentModal";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { FaStar } from "react-icons/fa";

const FootDetail = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.login.currentUser);
    const productDetail = useSelector(
        (state) => state.product.productDetail.data
    );
    const reviews = useSelector((state) => state.review.reviews.data);
    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleOnClose = () => {
        setOpen(false);
    };

    const sentToCart = async () => {
        await cartService.handleAddToCartService(user?.id, productId);
        cartRequestApi.getAllCarts(user?.id, dispatch);
    };

    useEffect(() => {
        productRequestApi.getProductDetail(productId, dispatch);
        reviewRequestApi.getAllReviews(productId, dispatch);
    }, [productId]);

    return (
        <div className="w-full min-h-screen flex items-center justify-start flex-col bg-primary">
            <Header />
            <div className="w-full flex flex-col items-start justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24 divide-y">
                <div className="w-full flex flex-row">
                    <div className="w-1/2 flex justify-center items-center">
                        <img
                            src={productDetail.imageURL}
                            alt=""
                            className="w-300 h-300"
                        />
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-start divide-y p-4 gap-4">
                        <div>
                            <p className="text-3xl text-headingColor font-semibold">
                                {productDetail.name}
                            </p>
                            <p className="text-2xl text-headingColor mt-2">
                                {productDetail["Category.name"]}
                            </p>
                            <p className="mt-4">{productDetail.description}</p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-red-500 mt-4">
                                $ {parseFloat(productDetail.price).toFixed(2)}
                            </p>
                            <div className="flex justify-start items-center mt-4 gap-2">
                                <FaStar className="text-xl text-red-500" />
                                <FaStar className="text-xl text-red-500" />
                                <FaStar className="text-xl text-red-500" />
                                <FaStar className="text-xl text-red-500" />
                                <FaStar className="text-xl text-zinc-500" />
                            </div>
                            <button
                                className="px-4 py-2 text-white text-lg bg-red-500 rounded-md mt-6 hover:text-red-500 hover:bg-white"
                                onClick={sentToCart}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col pt-10">
                    <div className="flex items-center justify-between">
                        <span className="text-3xl text-headingColor font-semibold">
                            Comment
                        </span>
                        <button
                            className="px-4 py-2 bg-red-500 text-white uppercase rounded-full hover:text-red-500 hover:bg-white"
                            onClick={handleOpenModal}
                        >
                            Add Comment
                        </button>
                    </div>
                    <div className="w-full flex flex-col mt-6 gap-y-4">
                        {reviews.length > 0 ? (
                            reviews.map((review, index) => (
                                <CommentItem key={index} data={review} />
                            ))
                        ) : (
                            <h3 className="text-3xl font-semibold text-headingColor">
                                There are no comments yet
                            </h3>
                        )}
                    </div>
                    <CommentModal open={open} handleClose={handleOnClose} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

const CommentItem = ({ data }) => {
    return (
        <div className="bg-white rounded-2xl p-4">
            <h3 className="text-xl">{data["User.username"]}</h3>
            <div className="flex items-center justify-start my-2 gap-x-8">
                <div className="flex justify-start items-center gap-2">
                    <Rating
                        value={data.rating}
                        readOnly
                        sx={{
                            color: "#EF4444",
                        }}
                        icon={<StarRoundedIcon />}
                        emptyIcon={<StarRoundedIcon />}
                    />
                </div>
                <span>Date: {data?.review_date}</span>
            </div>
            <div className="w-96 h-px bg-zinc-500"></div>
            <p className="w-full p-2 mt-2 text-lg">{data?.comment}</p>
        </div>
    );
};

export default FootDetail;
