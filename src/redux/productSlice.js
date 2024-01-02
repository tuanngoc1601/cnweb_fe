import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: {
        data: null,
        pendding: false,
        error: false,
    },
    categories: {
        data: null,
        pendding: false,
        error: false,
    },
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getProductStart: (state) => {
            state.products.pendding = true;
        },
        getProductSuccess: (state, action) => {
            state.products.pendding = false;
            state.products.data = action.payload;
            state.products.error = false;
        },
        getProductFailed: (state) => {
            state.products.pendding = false;
            state.products.error = true;
        },
        getCategoriesStart: (state) => {
            state.categories.pendding = true;
        },
        getCategoriesSuccess: (state, action) => {
            state.categories.pendding = false;
            state.categories.data = action.payload;
            state.categories.error = false;
        },
        getCategoriesFailed: (state) => {
            state.categories.pendding = false;
            state.categories.error = true;
        },
        resetProductStateRedux: () => initialState,
    },
});

export const {
    getProductStart,
    getProductSuccess,
    getProductFailed,
    getCategoriesStart,
    getCategoriesSuccess,
    getCategoriesFailed,
    resetProductStateRedux,
} = productSlice.actions;

export default productSlice.reducer;
