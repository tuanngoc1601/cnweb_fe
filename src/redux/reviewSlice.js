import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviews: {
        data: null,
        pendding: false,
        error: false,
    },
};

const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {
        getAllReviewsStart: (state) => {
            state.reviews.pendding = true;
        },
        getAllReviewsSuccess: (state, action) => {
            state.reviews.pendding = false;
            state.reviews.data = action.payload;
            state.reviews.error = false;
        },
        getAllReviewsFailed: (state) => {
            state.reviews.pendding = false;
            state.reviews.error = true;
        },
        resetReviewStateRedux: () => initialState,
    },
});

export const {
    getAllReviewsStart,
    getAllReviewsSuccess,
    getAllReviewsFailed,
    resetReviewStateRedux,
} = reviewSlice.actions;

export default reviewSlice.reducer;
