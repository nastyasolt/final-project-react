import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props) {

    let [loaded, setLoaded] = useState (false);
    let [forecast, setForecast] = useState (null);

    function handleResponse (response) {
       
        setForecast(response.data.daily);
        setLoaded(true)
;    }

    if (loaded) {
console.log(forecast);
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <div className="WeatherForecast-day">{forecast[0].dt}</div>
                        <WeatherIcon code="clear-sky-day" size={36} />    
                        <div className="WeatherForecast-temperature">
                            <span className="WeatherForecast-temperature-max">{forecast[0].temp.max}°</span>
                            <span className="WeatherForecast-temperature-min">{forecast[0].temp.min}°</span>
                        </div>
        
                    </div>
                </div>
            </div>
               
            );

    }
 
    else {

        let apiKey ="ebef9ca4a8de66ed586fac628fade056";
        let longitude = props.coordinates.longitude;
        let latitute = props.coordinates.latitude;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitute}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);
        return null;
    }

}