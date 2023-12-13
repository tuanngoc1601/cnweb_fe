import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../../assets/css/swiperStyles.css";
import "swiper/css/bundle";
import { fruits } from "../../utils/styles";
import SliderCard from "./SliderCard";

const Slider = () => {
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
