import React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <IconButton
            aria-label="previous"
            size="large"
            onClick={onClick}
            className="bg-gray-300"
        >
            <ArrowBackIcon />
        </IconButton>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <IconButton
            aria-label="next"
            size="large"
            onClick={onClick}
            className="bg-gray-300"
        >
            <ArrowForwardIcon />
        </IconButton>
    );
};

const ArrowButton = (props) => {
    const prevClick = props.prevClick;
    const nextClick = props.nextClick;
    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            className="mb-2 pe-4"
        >
            <PrevArrow onClick={prevClick} />
            <NextArrow onClick={nextClick} />
        </Stack>
    );
};

export default ArrowButton;
