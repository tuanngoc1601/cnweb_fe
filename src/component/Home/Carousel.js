import * as React from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../assets/images/banner.png";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <Box className="w-3/4 px-6 py-3">
            <Slider {...settings}>
                <div>
                    <img src={banner} alt={`Banner`} />
                </div>
            </Slider>
        </Box>
    );
};

export default Carousel;
