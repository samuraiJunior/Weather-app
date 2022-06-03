import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  getWeather } from "../DAL/API";
import { Weather } from "../Types/WeatherTypes";


export const GetWeather=createAsyncThunk<Weather|null,string>(
    "Weather/GetWeather",
    async(city)=>{
        try {
            const response=await getWeather(city)
            console.log(response)
            return response.data
        } catch (error) {
            return error
        }
    }
)

interface initState{
        weather:Weather|null,
        city:string
        error:null|string
}
const initialState:initState={
        weather:null,
        city:"",
        error:null
}
const WeatherSlice=createSlice({
    name:"Weather",
    initialState,
    reducers:{
        GetSelectCity(state,action:PayloadAction<string>){
            state.city=action.payload
        },
    },
    extraReducers:(builder)=>builder
    .addCase(GetWeather.fulfilled,(state,action)=>{
        state.weather=action.payload
    })
    .addCase(GetWeather.pending,(state)=>{
        state.error=null
    })
    .addCase(GetWeather.rejected,(state)=>{
        state.error="Введите правильное название города/страны/республики и.т.д"
    })
})
export default WeatherSlice.reducer
export const {GetSelectCity}=WeatherSlice.actions