import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Carousel from "../component/Home/Carousel";
import CategorySideBar from "../component/Home/CategorySideBar";
import FlashSale from "../component/Home/FlashSale";
import CategoryList from "../component/Home/CategoryList";
import BestSellingProducts from "../component/Home/BestSellingProducts";
import OurProduct from "../component/Home/OurProduct";
import NewArrival from "../component/Home/NewArrival";
import banner from "../assets/images/maketing.png";

const HomePage = () => {

    return (
        <Container>
            <Box className="flex flex-row mt-3 mb-16">
                <CategorySideBar />
                <Divider orientation="vertical" flexItem/>
                <Carousel />
            </Box>
            <FlashSale />
            <Divider />
            <CategoryList />
            <Divider />
            <BestSellingProducts />
            <Box className="p-4">
                <img src={banner} alt="product" />
            </Box>
            <OurProduct />
            <NewArrival />
        </Container>
    );
};

export default HomePage;
