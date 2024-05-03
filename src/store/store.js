import { configureStore } from "@reduxjs/toolkit";
import   homeSlice  from "../features/Slices/HomeSlice";
export const store = configureStore({
    reducer:{ 
        home : homeSlice,
    },
})