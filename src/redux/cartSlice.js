import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        carts: {
            data: null,
            pendding: false,
            error: false,
        },
    },
    reducers: {
        getAllCartStart: (state) => {
            state.carts.pendding = true;
        },
        getAllCartSuccess: (state, action) => {
            state.carts.pendding = false;
            state.carts.data = action.payload;
            state.carts.error = false;
        },
        getAllCartFailed: (state) => {
            state.carts.pendding = false;
            state.carts.error = true;
        },
    },
});

export const {
    getAllCartStart,
    getAllCartSuccess,
    getAllCartFailed
} = cartSlice.actions;

export default cartSlice.reducer;
