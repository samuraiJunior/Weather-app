
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import  './App.scss';
import ThisDayInfoItem from './Components/ThisDayInfoItem';
import { useAppDispatch, useAppSelector } from './Hooks/hooks';
import { GetSelectCity, GetWeather } from './Redux/WeatherSlice';


const App=()=>{
  const dispatch=useAppDispatch()
  const city=useAppSelector(state=>state.Weather.city)
  const weather=useAppSelector(state=>state.Weather.weather)
  const error=useAppSelector(state=>state.Weather.error)

  const getSelectCity=(e:any)=>{
   dispatch(GetSelectCity(e.target.value))
  }
  const getWeather=(e:any)=>{
    e.preventDefault()
    dispatch(GetWeather(city))
  }
 
  return (
    <Routes>
      <Route path='/' element={
    <div className='App'>
    <main> 
      <h3>Узнать погоду</h3>
        <div className='searchBlock'>
          <form onSubmit={getWeather}>  
        <input  value={city} onChange={getSelectCity} 
         type={"text"} placeholder="Введите локацию"/>
         <img onClick={getWeather} src="Imgs/search.svg" alt='icon'/>
         {error !==null&&<span>{error}</span>}
         </form>  
         </div>
         {weather !==null?<>
         <div className='wrapper'>
      <div className='location-box'>
      <div className='location-box__location'>
        <p>{weather?.location.name}, {weather?.location?.country}</p>
      </div>
      <div className='location-box__temp'>
      <h1>{Math.floor(weather?.current?.temp_c)}°C</h1>
      </div>
      <div className='location-box__description'>
        <p>{weather?.current.condition.text}</p>
        <img
         src={"https:"+weather.current.condition.icon} alt='icon'/>
      </div>
      </div>
            
      <div className='weather-box'>
          <ThisDayInfoItem  InfoTitle={"Ветер"} metric={"км/ч"} value={Math.floor(weather?.current?.wind_kph)}/>
          <ThisDayInfoItem  InfoTitle={"Влажность"} metric={"%"} value={Math.floor(weather?.current?.humidity)}/>
          <ThisDayInfoItem  InfoTitle={"Ощущается как"} metric={"°С"} value={Math.floor(weather?.current?.feelslike_c)}/>
         
        </div>
        </div>
        </> :null}

    </main>
    
   </div> }/>
    </Routes>
  );
}

export default App;
