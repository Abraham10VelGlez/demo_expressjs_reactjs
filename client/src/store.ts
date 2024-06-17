import { configureStore } from "@reduxjs/toolkit";
import { AuthAVG } from "./redux_1";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// mi arhcivo de utilidades
export const store_redux = configureStore({
    reducer: {
        authReducer: AuthAVG.reducer,
    }
});


export type RooState = ReturnType<typeof store_redux.getState>;
export type AppDispatch = typeof store_redux.dispatch;
export const useAppSelector: TypedUseSelectorHook<RooState> = useSelector;