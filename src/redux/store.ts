import { configureStore } from "@reduxjs/toolkit";
import { storeReducer } from "./firstSlice";

export const store = configureStore({
    reducer: {
        shopy: storeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;