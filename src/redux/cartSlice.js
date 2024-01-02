import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: {
        data: null,
        pendding: false,
        error: false,
    },
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
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
        resetCartStateRedux: () => initialState,
    },
});

export const {
    getAllCartStart,
    getAllCartSuccess,
    getAllCartFailed,
    resetCartStateRedux,
} = cartSlice.actions;

export default cartSlice.reducer;
