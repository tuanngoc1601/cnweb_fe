import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
    return (
        <Box
            className="w-full backdrop-blur-md shadow-inner shadow-gray-300"
        >
            <Container>
                <Grid container direction="row">
                    <Grid item xs={3}>
                        <Stack sx={{ margin: "50px 0", padding: "10px 40px" }}>
                            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                                Exclusive
                            </p>
                            <p style={{ fontSize: "20px" }}>Subscribe</p>
                            <p>Get 10% off your first order</p>
                            <Box
                                sx={{
                                    borderRadius: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "5px 15px",
                                    mt: "3px",
                                    border: "1px solid #000000",
                                }}
                            >
                                <InputBase
                                    placeholder="Enter your email"
                                    inputProps={{
                                        "aria-label": "email",
                                    }}
                                    sx={{
                                        "& input": {
                                            color: "black",
                                        },
                                    }}
                                />
                                <SendIcon
                                    sx={{
                                        color: "#000000",
                                        lineHeight: "100%",
                                        padding: "4px",
                                        ml: 1,
                                        opacity: "0.4",
                                        cursor: "pointer",
                                    }}
                                />
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <Stack sx={{ margin: "50px 0", padding: "10px 40px" }}>
                            <p style={{ fontSize: "20px" }}>Support</p>
                            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                            <p>exclusive@gmail.com</p>
                            <p>+88015-88888-9999</p>
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <Stack sx={{ margin: "50px 0", padding: "10px 40px" }}>
                            <p style={{ fontSize: "20px" }}>Account</p>
                            <p>My Account</p>
                            <p>Login / Register</p>
                            <p>Cart</p>
                            <p>Wishlist</p>
                            <p>Shop</p>
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <Stack sx={{ margin: "50px 0", padding: "10px 40px" }}>
                            <p style={{ fontSize: "20px" }}>Download App</p>
                            <p>Save $3 with App New User Only</p>
                            <Stack
                                direction="row"
                                spacing={2}
                                sx={{
                                    display: "flex",
                                    justifyContent: "start",
                                    alignItems: "center",
                                }}
                            >
                                <FacebookIcon />
                                <TwitterIcon />
                                <InstagramIcon />
                                <LinkedInIcon />
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
