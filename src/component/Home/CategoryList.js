import * as React from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ArrowButton from "./ArrowButton";

const CategoryList = () => {
    const sliderRef = React.useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
    };

    const categories = [
        {
            id: 1,
            name: "Phone",
        },
        {
            id: 2,
            name: "Computer",
        },
        {
            id: 3,
            name: "SmartWatch",
        },
        {
            id: 4,
            name: "Camera",
        },
        {
            id: 5,
            name: "HeadPhones",
        },
        {
            id: 6,
            name: "Gaming",
        },
        {
            id: 7,
            name: "Tablet",
        },
        {
            id: 6,
            name: "Fashion",
        },
    ];

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

    return (
        <Box className="mb-10 mt-16">
            <Box className="flex flex-row ps-4">
                <span className="w-3 h-8 bg-red-600 rounded me-3"></span>
                <Typography
                    className="text-red-500 text-start font-semibold m-0"
                    variant="subtitle1"
                    gutterBottom
                >
                    Categories
                </Typography>
            </Box>
            <Box className="flex flex-row justify-between mt-5 ps-4">
                <Typography
                    className="text-start text-gray-950"
                    variant="h4"
                    gutterBottom
                >
                    Browse By Category
                </Typography>

                <ArrowButton prevClick={handlePrevClick} nextClick={handleNextClick} />
            </Box>
            <Box className="mt-5">
                <Slider ref={sliderRef} {...settings}>
                    {categories.map((category) => {
                        return (
                            <div className="p-4" key={category.id}>
                                <div className="border rounded">
                                    <SmartphoneIcon fontSize="large" className="my-5" />
                                    <h6 className="font-light mb-4">{category.name}</h6>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </Box>
        </Box>
    );
};

export default CategoryList;
