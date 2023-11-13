import * as React from "react";
import Button from "@mui/material/Button";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

const ButtonHome = ({ content }) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#DB4444",
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Button variant="contained" sx={{ textTransform: 'capitalize', fontSize: '1rem' }}>
                {content}
            </Button>
        </ThemeProvider>
    );
};

export default ButtonHome;
