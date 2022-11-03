import React, { useState, useEffect } from "react";

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props) {

    let [loaded, setLoaded] = useState (false);
    let [forecast, setForecast] = useState (null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    
    function handleResponse (response) {
       
        setForecast(response.data.daily);
        setLoaded(true)
;    }

    if (loaded) {
    console.log(forecast);
        return (
            <div className="WeatherForecast">
                <div className="row">

                    {forecast.map(function (dailyForecast, index) {
                        if (index < 6) {
                            return (
                                <div className="col" key={index}>
                           <WeatherForecastDay data={dailyForecast} />
                                </div>
                        );
                        }
                    })}

                </div>
            </div>
               
            );

    }
 
    else {

        let apiKey ="09477a576f35b29tfo03bfa9c364be0e";
        let longitude = props.coordinates.longitude;
        let latitute = props.coordinates.latitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitute}&key=${apiKey}&units`;
    
        axios.get(apiUrl).then(handleResponse);
        return null;
    }

}