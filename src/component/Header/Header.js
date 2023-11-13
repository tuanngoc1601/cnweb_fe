import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountMenu from "./AccountMenu";
import { useSelector } from "react-redux";

const pages = ["Home", "Contact", "About"];

const Search = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#f5f5f5",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                padding: "5px 15px",
                mx: 2,
            }}
        >
            <InputBase
                placeholder="What are you looking for?"
                inputProps={{ "aria-label": "search" }}
            />
            <SearchIcon
                sx={{
                    color: "#000",
                    lineHeight: "100%",
                    padding: "4px",
                    ml: 1,
                    opacity: "0.4",
                    cursor: "pointer",
                }}
            />
        </Box>
    );
};

const Header = () => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: "#fff",
                boxShadow: "0px 10px 30px #f0f0f0",
                zIndex: 105,
            }}
        >
            <Container maxWidth="lg">
                <Toolbar
                    disableGutters
                    sx={{
                        width: "100%",
                    }}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "Inter",
                            fontWeight: 700,
                            letterSpacing: "0.72px",
                            fontSize: "24px",
                            color: "#000",
                            textDecoration: "none",
                        }}
                    >
                        Exclusive
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            mx: 10,
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{
                                    my: 2,
                                    mx: 2,
                                    color: "black",
                                    display: "block",
                                    fontFamily: "Poppins",
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Search />
                    {user ? (
                        <>
                            <Stack spacing={3} direction="row">
                                <IconButton aria-label="notification">
                                    <Badge badgeContent={4} color="secondary">
                                        <NotificationsIcon
                                            sx={{ width: 28, height: 28 }}
                                        />
                                    </Badge>
                                </IconButton>
                                <IconButton aria-label="cart">
                                    <Badge badgeContent={4} color="secondary">
                                        <ShoppingCartIcon
                                            sx={{ width: 28, height: 28 }}
                                        />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    aria-controls={
                                        open ? "account-menu" : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                                >
                                    <Avatar sx={{ width: 32, height: 32 }}>
                                        M
                                    </Avatar>
                                </IconButton>
                            </Stack>
                            <AccountMenu
                                open={open}
                                handleClose={handleClose}
                                anchorEl={anchorEl}
                            />
                        </>
                    ) : (
                        ""
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
