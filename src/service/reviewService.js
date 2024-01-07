import { createAxiosClient } from "../axios";

const axiosClientReviews = createAxiosClient();

export const handleGetAllReviewsService = (productId) => {
    return axiosClientReviews.get(`/api/v1/review/getAllReviews/${productId}`);
};

export const handlePostReviewService = (reviewBody) => {
    return axiosClientReviews.post("/api/v1/review/postReview", reviewBody);
};
