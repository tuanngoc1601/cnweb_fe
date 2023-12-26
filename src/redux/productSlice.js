import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: {
            data: null,
            pennding: false,
            error: false,
        },
    },
    reducers: {
        getProductStart: (state) => {
            state.products.pennding = true;
        },
        getProductSuccess: (state, action) => {
            state.products.pennding = false;
            state.products.data = action.payload;
            state.products.error = false;
        },
        getProductFailed: (state) => {
            state.products.pennding = false;
            state.products.error = true;
        },
    },
});

export const {
    getProductStart,
    getProductSuccess,
    getProductFailed
} = productSlice.actions;

export default productSlice.reducer;