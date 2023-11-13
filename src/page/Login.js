import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LoginForm from "../component/Auth/LoginForm";
import slide_image from "../assets/images/slide_image.png";

const Login = () => {
    return (
        <Container>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ my: 2 }}
            >
                <Grid item xs={7}>
                    <Box
                        sx={{
                            backgroundImage: `url(${slide_image})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            height: "650px",
                            width: "90%",
                            margin: "0 auto",
                        }}
                    ></Box>
                </Grid>
                <Grid item xs={5}>
                    <Box>
                        <LoginForm />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
