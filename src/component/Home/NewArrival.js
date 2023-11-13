import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import arrival_1 from "../../assets/images/new_arrival_1.png";
import arrival_2 from "../../assets/images/new_arrival_2.png";
import arrival_3 from "../../assets/images/new_arrival_3.png";
import arrival_4 from "../../assets/images/new_arrival_4.png";
import driver from "../../assets/images/driver.png";
import service from "../../assets/images/service.png";
import money from "../../assets/images/money.png";

const NewArrival = () => {
    return (
        <Box className="mb-5 mt-24">
            <Box className="flex flex-row ps-4">
                <span className="w-3 h-8 bg-red-600 rounded me-3"></span>
                <Typography
                    className="text-red-500 text-start font-semibold m-0"
                    variant="subtitle1"
                    gutterBottom
                >
                    Featured
                </Typography>
            </Box>
            <Box className="mt-5 ps-4">
                <Typography
                    className="text-start text-gray-950"
                    variant="h4"
                    gutterBottom
                >
                    New Arrival
                </Typography>
            </Box>
            <Box className="mb-20">
                <Grid container columnSpacing={4} className="p-4">
                    <Grid item xs={6}>
                        <img src={arrival_1} alt="arrival_1" />
                    </Grid>

                    <Grid item xs={6}>
                        <Grid container rowSpacing={4} columnSpacing={4}>
                            <Grid item xs={12}>
                                <img src={arrival_2} alt="arrival_2" />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container columnSpacing={4}>
                                    <Grid item xs={6}>
                                        <img src={arrival_3} alt="arrival_3" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img src={arrival_4} alt="arrival_4" />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box className="flex flex-row justify-center align-center mb-28">
                <Box className="mx-5">
                    <img src={driver} alt="driver" className="w-12 h-12 mx-auto my-4" />
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: '600', margin: '0' }}>
                        FREE AND FAST DELIVERY
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: '300' }}>
                        Free delivery for all orders over $140
                    </Typography>
                </Box>
                <Box className="mx-5">
                    <img src={service} alt="service" className="w-12 h-12 mx-auto my-4" />
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: '600', margin: '0' }}>
                        24/7 CUSTOMER SERVICE
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: '300' }}>
                        Friendly 24/7 customer support
                    </Typography>
                </Box>
                <Box className="mx-5">
                    <img src={money} alt="money" className="w-12 h-12 mx-auto my-4" />
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: '600', margin: '0' }}>
                        FMONEY BACK GUARANTEE
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: '300' }}>
                        We reurn money within 30 days
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default NewArrival;
