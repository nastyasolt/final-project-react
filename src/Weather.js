import React, {useState} from "react"
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response.data);

        setWeatherData({
            ready: true,
            city: response.data.city,
            description: response.data.condition.description,
            date: "Wednesday 07:00",
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
          
        });
       
      
    }

    if (weatherData.ready) {
    return (
        <div className="Weather">
        <form>
        <div className="row">
        <div className="col-9">
        <input type="search" 
        placeholder="Enter a city.." 
        className="form-control" 
        autoFocus="on"/>
        </div>
        <div className="col-3">
        <input type="submit" 
        value="Search" 
        className="btn btn-primary w-100"/>
        </div>
        </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
              
                <img src={weatherData.iconUrl}
                alt={weatherData.description}
                 />
         
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°C</span>
            
           
            </div>
            <div className="col-6">
                <ul>
                   
                    <li>Humidity : {weatherData.humidity}%</li>
                    <li>Wind : {Math.round(weatherData.wind)} km/h</li>
                </ul>
            </div>
        </div>
        
       </div>);
    } 
    else {
    const key = "09477a576f35b29tfo03bfa9c364be0e";   
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
} 
}