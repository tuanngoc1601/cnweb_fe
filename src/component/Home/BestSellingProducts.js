import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ProductItem from "./ProductItem";
import Button from "../Customize/Button";
import product from "../../assets/images/sale.png";

const BestSellingProducts = () => {
    const products = [
        {
            id: 1,
            name: "Product 1",
            description: "Description for Product 1",
            price: 10.99,
            image: product,
        },
        {
            id: 2,
            name: "Product 2",
            description: "Description for Product 2",
            price: 15.99,
            image: product,
        },
        {
            id: 3,
            name: "Product 3",
            description: "Description for Product 3",
            price: 10.99,
            image: product,
        },
        {
            id: 4,
            name: "Product 4",
            description: "Description for Product 4",
            price: 15.99,
            image: product,
        },
    ];

    return (
        <Box className="mb-12 mt-16">
            <Box className="flex flex-row ps-4">
                <span className="w-3 h-8 bg-red-600 rounded me-3"></span>
                <Typography
                    className="text-red-500 text-start font-semibold m-0"
                    variant="subtitle1"
                    gutterBottom
                >
                    This Month
                </Typography>
            </Box>
            <Box className="flex flex-row justify-between items-center mt-5 px-4">
                <Typography
                    className="text-start text-gray-950"
                    variant="h4"
                    gutterBottom
                >
                    Best Selling Products
                </Typography>
                <Button content="view all" />
            </Box>
            <Box className="mt-2">
                <Grid container spacing={4} className="p-4">
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
        </Box>
    );
};

export default BestSellingProducts;
