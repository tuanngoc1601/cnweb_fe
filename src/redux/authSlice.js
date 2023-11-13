import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: {
            currentUser: null,
            pennding: false,
            error: false,
        },
        register: {
            pennding: false,
            error: false,
            success: false,
        },
    },
    reducers: {
        loginStart: (state) => {
            state.login.pennding = true;
        },
        loginSuccess: (state, action) => {
            state.login.pennding = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFailed: (state) => {
            state.login.pennding = false;
            state.login.error = true;
        },
        registerStart: (state) => {
            state.register.pennding = true;
        },
        registerSuccess: (state) => {
            state.register.pennding = false;
            state.register.error = false;
            state.register.success = true;
        },
        registerFailed: (state) => {
            state.register.pennding = false;
            state.register.error = true;
            state.register.success = false;
        },
        logoutStart: (state) => {
            state.login.pennding = true;
        },
        logoutSuccess: (state) => {
            state.login.pennding = false;
            state.login.currentUser = null;
            state.login.error = false;
        },
        logoutFailed: (state) => {
            state.login.pennding = false;
            state.login.error = true;
        },
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed,
    logoutStart,
    logoutSuccess,
    logoutFailed,
} = authSlice.actions;

export default authSlice.reducer;
