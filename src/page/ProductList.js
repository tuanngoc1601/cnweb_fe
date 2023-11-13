import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ProductItem from "../component/Home/ProductItem";
import productImage from "../assets/images/product.png";

const ProductList = () => {
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
        {
            id: 7,
            name: "Product 7",
            description: "Description for Product 7",
            price: 10.99,
            image: productImage,
        },
        {
            id: 8,
            name: "Product 8",
            description: "Description for Product 8",
            price: 15.99,
            image: productImage,
        },
    ];
    return (
        <Container>
            <Box className="flex flex-row mt-10 justify-between align-center p-4">
                <Typography variant="h5" gutterBottom sx={{ margin: 0 }}>
                    Products List
                </Typography>
                <Button variant="outlined">Move All To Bag</Button>
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
        </Container>
    );
};

export default ProductList;
