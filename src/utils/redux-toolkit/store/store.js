import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "../features/modeSlice";
import countriesReducer from '../features/countriesSlice'

export const store = configureStore({
    reducer: {
        toggle: modeReducer ,
        switch: countriesReducer
    }
})