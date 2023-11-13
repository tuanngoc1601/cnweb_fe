import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ProductItem = (props) => {
    const { image, name, description, price } = props;
    return (
        <Card className="max-w-xs rounded overflow-hidden shadow-lg mx-auto mb-6">
            <CardMedia
                className="w-full"
                component="img"
                alt={name}
                src={image}
            />
            <CardContent>
                <Typography className="font-bold text-xl mb-2">
                    {name}
                </Typography>
                <Typography className="text-gray-700 text-base">
                    {description}
                </Typography>
                <Typography className="text-gray-900 text-lg mt-2">
                    ${price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductItem;
