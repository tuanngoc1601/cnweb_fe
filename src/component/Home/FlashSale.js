import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import Typography from "@mui/material/Typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductItem from "./ProductItem";
import ArrowButton from "./ArrowButton";
import Button from "../Customize/Button";
import productImage from "../../assets/images/product.png";

const FlashSale = () => {
    const sliderRef = React.useRef(null);

    const handlePrevClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleNextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
    };
    const products = [
        {
            id: 1,
            name: "Product 1",
            description: "Description for Product 1",
            price: 10.99,
            image: productImage,
        },
        {
            id: 2,
            name: "Product 2",
            description: "Description for Product 2",
            price: 15.99,
            image: productImage,
        },
        {
            id: 3,
            name: "Product 3",
            description: "Description for Product 3",
            price: 10.99,
            image: productImage,
        },
        {
            id: 4,
            name: "Product 4",
            description: "Description for Product 4",
            price: 15.99,
            image: productImage,
        },
        {
            id: 5,
            name: "Product 5",
            description: "Description for Product 5",
            price: 10.99,
            image: productImage,
        },
        {
            id: 6,
            name: "Product 6",
            description: "Description for Product 6",
            price: 15.99,
            image: productImage,
        },
    ];

    return (
        <Box className="mb-5">
            <Box className="flex flex-row ps-4">
                <span className="w-3 h-8 bg-red-600 rounded me-3"></span>
                <Typography
                    className="text-red-500 text-start font-semibold m-0"
                    variant="subtitle1"
                    gutterBottom
                >
                    Today's
                </Typography>
            </Box>
            <Box className="flex flex-row justify-between mt-5 ps-4">
                <Typography
                    className="text-start text-gray-950"
                    variant="h4"
                    gutterBottom
                >
                    Flash Sales
                </Typography>
                <ArrowButton
                    prevClick={handlePrevClick}
                    nextClick={handleNextClick}
                />
            </Box>
            <Box>
                <Slider ref={sliderRef} {...settings}>
                    {products.map((product) => {
                        return (
                            <div className="p-4" key={product.id}>
                                <ProductItem
                                    name={product.name}
                                    description={product.description}
                                    image={product.image}
                                    price={product.price}
                                />
                            </div>
                        );
                    })}
                </Slider>
            </Box>
            <Box className="mt-4 mb-12">
                <Button content="view product all" />
            </Box>
        </Box>
    );
};

export default FlashSale;
