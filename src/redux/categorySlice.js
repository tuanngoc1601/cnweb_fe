import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: {
        data: null,
        pendding: false,
        error: false,
    },
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        getProductByCategoryStart: (state) => {
            state.categories.pendding = true;
        },
        getProductByCategorySuccess: (state, action) => {
            state.categories.pendding = false;
            state.categories.data = action.payload;
            state.categories.error = false;
        },
        getProductByCategoryFailed: (state) => {
            state.categories.pendding = false;
            state.categories.error = true;
        },
        resetCategoryStateRedux: () => initialState,
    },
});

export const {
    getProductByCategoryStart,
    getProductByCategorySuccess,
    getProductByCategoryFailed,
    resetCategoryStateRedux,
} = categorySlice.actions;

export default categorySlice.reducer;
