import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { reviewService } from "../../service";
import { reviewRequestApi } from "../../redux/requests";

const CommentModal = ({ open, handleClose }) => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const productDetail = useSelector((state) => state.product.productDetail.data);
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const dispatch = useDispatch();

    const handlePostComment = async () => {
        handleClose();
        const postReview = {
            user_id: user?.id,
            product_id: productDetail?.id,
            rating: rating,
            comment: comment,
        };
        await reviewService.handlePostReviewService(postReview);
        reviewRequestApi.getAllReviews(productDetail?.id, dispatch);
    }

    return (
        <Modal open={open} onClose={handleClose}>
            <Fade in={open} timeout={500}>
                <Stack
                    spacing={1}
                    sx={{
                        borderRadius: "24px",
                        backgroundColor: "white",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        p: 4,
                        boxShadow: 24,
                        width: { md: "50%", sm: "80%", xs: "90%" },
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: "Playfair Display",
                            fontWeight: 700,
                            fontSize: "20px",
                            lineHeight: "52px",
                            color: "#07143B",
                            textAlign: "center",
                        }}
                    >
                        Your Comment
                    </Typography>
                    <TextField
                        required
                        id="name-field"
                        label="User name"
                        multiline
                        maxRows={1}
                        color="warning"
                        sx={{
                            width: "100%",
                        }}
                        value={user?.username}
                        disabled
                    />
                    <TextField
                        color="warning"
                        required
                        id="name-field"
                        label="Comment"
                        multiline
                        rows={4}
                        maxRows={4}
                        onChange={(e) => {
                            setComment(e.target.value);
                        }}
                    />
                    <Stack
                        direction="row"
                        spacing={5}
                        sx={{ alignItems: "center" }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                fontSize: "15px",
                                lineHeight: "52px",
                                color: "#07143B",
                                textAlign: "center",
                            }}
                        >
                            Rating:
                        </Typography>
                        <Rating
                            onChange={(e, newRate) => {
                                setRating(newRate);
                            }}
                            sx={{
                                color: "#EA6A12",
                            }}
                            icon={<StarRoundedIcon />}
                            emptyIcon={<StarRoundedIcon />}
                        />
                    </Stack>
                    <Button
                        variant="contained"
                        onClick={handlePostComment}
                        sx={{
                            backgroundColor: "#EA6A12",
                            borderRadius: "100px",
                            alignSelf: "center",
                            fontWeight: "normal",
                            fontSize: "15px",
                            lineHeight: "175%",
                            color: "white",
                            "&:hover, &:active": {
                                backgroundColor: "#f57c00",
                            },
                            marginBottom: 2,
                        }}
                        disabled={comment.length === 0}
                    >
                        Post
                    </Button>
                </Stack>
            </Fade>
        </Modal>
    );
};

export default CommentModal;
