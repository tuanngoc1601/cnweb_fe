import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "../Customize/Button";
import Grid from "@mui/material/Grid";
import ProductItem from "./ProductItem";
import product1 from "../../assets/images/sale.png";
import product2 from "../../assets/images/product.png";

const OurProduct = () => {
    const products = [
        {
            id: 1,
            name: "Product 1",
            description: "Description for Product 1",
            price: 10.99,
            image: product1,
        },
        {
            id: 2,
            name: "Product 2",
            description: "Description for Product 2",
            price: 15.99,
            image: product1,
        },
        {
            id: 3,
            name: "Product 3",
            description: "Description for Product 3",
            price: 10.99,
            image: product1,
        },
        {
            id: 4,
            name: "Product 4",
            description: "Description for Product 4",
            price: 15.99,
            image: product1,
        },
        {
            id: 5,
            name: "Product 5",
            description: "Description for Product 5",
            price: 10.99,
            image: product2,
        },
        {
            id: 6,
            name: "Product 6",
            description: "Description for Product 6",
            price: 15.99,
            image: product2,
        },
        {
            id: 7,
            name: "Product 7",
            description: "Description for Product 7",
            price: 10.99,
            image: product2,
        },
        {
            id: 8,
            name: "Product 8",
            description: "Description for Product 8",
            price: 15.99,
            image: product2,
        },
    ];
    return (
        <Box className="mb-5 mt-14">
            <Box className="flex flex-row ps-4">
                <span className="w-3 h-8 bg-red-600 rounded me-3"></span>
                <Typography
                    className="text-red-500 text-start font-semibold m-0"
                    variant="subtitle1"
                    gutterBottom
                >
                    Our Products
                </Typography>
            </Box>
            <Box className="mt-5 ps-4">
                <Typography
                    className="text-start text-gray-950"
                    variant="h4"
                    gutterBottom
                >
                    Explore Our Products
                </Typography>
            </Box>
            <Box>
                <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={4}
                    className="p-4"
                >
                    {products.map((product) => {
                        return (
                            <Grid item xs={3} key={product.id}>
                                <div>
                                    <ProductItem
                                        name={product.name}
                                        description={product.description}
                                        image={product.image}
                                        price={product.price}
                                    />
                                </div>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
            <Box className="mt-4 mb-12">
                <Link to={"/all-products"}>
                    <Button content="view product all" />
                </Link>
            </Box>
        </Box>
    );
};

export default OurProduct;
