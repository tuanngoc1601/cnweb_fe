import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../../assets/css/swiperStyles.css";
import "swiper/css/bundle";
// import { fruits } from "../../utils/styles";
import SliderCard from "./SliderCard";

const Slider = () => {
    const products = useSelector((state) => state.product.products.data);
    const [fruits, setFruits] = useState(null);

    useEffect(() => {
        const fruitsData = products?.filter((data) => data["Category.name"] === "Fruits");
        setFruits(fruitsData);
    }, [products]);
    
    return (
        <div className="w-full pt-10">
            <Swiper
                slidesPerView={4}
                centeredSlides={false}
                spaceBetween={30}
                grabCursor={true}
                className="mySwiper"
            >
                {fruits &&
                    fruits.map((data, i) => (
                        <SwiperSlide key={i}>
                            <SliderCard data={data} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default Slider;
