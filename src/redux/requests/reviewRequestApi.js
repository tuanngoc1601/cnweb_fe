import {
    getAllReviewsStart,
    getAllReviewsSuccess,
    getAllReviewsFailed,
} from "../reviewSlice";
import { reviewService } from "../../service";

export const getAllReviews = async (productId, dispatch) => {
    dispatch(getAllReviewsStart());
    try {
        const res = await reviewService.handleGetAllReviewsService(productId);
        dispatch(getAllReviewsSuccess(res.data.reviews));
    } catch (err) {
        dispatch(getAllReviewsFailed());
    }
};