import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props) {

    function handleResponse (response) {
        console.log(response.data);
    }

    let apiKey ="ebef9ca4a8de66ed586fac628fade056";
    let longitude = props.coordinates.longitude;
    let latitute = props.coordinates.latitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitute}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

return (
    <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">Thu</div>
                <WeatherIcon code="clear-sky-day" size={36} />    
                <div className="WeatherForecast-temperature">
                    <span className="WeatherForecast-temperature-max">19°</span>
                    <span className="WeatherForecast-temperature-min">10°</span>
                </div>

            </div>
        </div>
    </div>
       
    );
}