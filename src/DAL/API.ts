import axios from "axios";
import { Weather } from "../Types/WeatherTypes";


export const getWeather=async(city:string)=>{
    try {
        const response=await axios.get<Weather>(`https://api.weatherapi.com/v1/forecast.json?key=7ed6f2abcabf44e8bad170930222005&q=${city}&days=1&aqi=no&alerts=no&units=metric&lang=ru`)
    console.log(response)
    
    return response
    } catch (error:any) {
        console.log(error)
        return error.response.status  
    }
    
}
