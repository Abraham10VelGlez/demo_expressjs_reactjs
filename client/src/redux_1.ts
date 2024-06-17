import { createSlice } from "@reduxjs/toolkit";

const initialState: { isAuth: boolean } = {
    isAuth: false,
};

export const AuthAVG = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        log: (state) => {
            state.isAuth = true;

        },
        logout: (state) => {
            state.isAuth = false;
        },

    },

});


// Action creators are generated for each case reducer function
export const { log, logout } = AuthAVG.actions
export default AuthAVG.reducer

