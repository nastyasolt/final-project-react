import React, {useState} from "react"

import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
    
    
        setWeatherData({
            ready: true,
            coordinates:response.data.coordinates,
            city: response.data.city,
            description: response.data.condition.description,
            date: new Date(response.data.time*1000),
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            icon: response.data.condition.icon
          
        });
    }

    function search() {
        const key = "09477a576f35b29tfo03bfa9c364be0e";   
        let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }


    function handleCityChange(event) {
        setCity(event.target.value);
    }


    if (weatherData.ready) {
    return (
        <div className="Weather">
        <form onSubmit={handleSubmit}>  
        <div className="row">
        <div className="col-9">
    
     <input type="search" 
        placeholder="Enter a city.." 
        className="form-control" 
        autoFocus="on"
        onChange={handleCityChange}
        />

        </div>
        <div className="col-3">
    
    <input type="submit" 
        value="Search" 
        className="btn btn-primary "/>

        </div>
        </div>
        </form>
        <WeatherInfo data={weatherData} />

        <WeatherForecast coordinates={weatherData.coordinates}/>
       
        
       </div>
       );
    } else {
        search();
        return "Loading...";
   } 
}