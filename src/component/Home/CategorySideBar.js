import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const CategorySideBar = () => {
    const categories = [
        "Woman's Fashion",
        "Electronics",
        "Home & Lifestyle",
        "Medicine",
        "Sports & Outdoor",
        "Baby's & Toys",
        "Groceries & Pets",
        "Health & Beauty",
    ];

    return (
        <Box className="w-1/4 pe-4">
            <List className="p-0">
                {categories.map((category, index) => (
                    <div key={index}>
                        <ListItem button className="h-10">
                            <ListItemText primary={category} />
                        </ListItem>
                    </div>
                ))}
            </List>
        </Box>
    );
};

export default CategorySideBar;
