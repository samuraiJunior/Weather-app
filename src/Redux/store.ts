import { configureStore } from "@reduxjs/toolkit";
import WeatherSlice from "./WeatherSlice";

const store=configureStore({
    reducer:{
        Weather:WeatherSlice
    },
    
})
//window.store=store

export default store
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch 