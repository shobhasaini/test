import React, { useState } from "react";
import axios from "axios";
import './Weather.css';
import WeatherInfo from "./WeatherInfo";
import "./SearchEngine.css";
import Forecast from './Forecast';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            coordinates: response.data.coordinates,
            temperature: Math.round(response.data.temperature.current),
            city: response.data.city,
            date: new Date(response.data.time * 1000),
            description: response.data.condition.description,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            iconUrl: response.data.condition.icon_url,
        });
    }

    function search() {
        const apiKey = `406acc31e3t70db95bde98ef0co5dbb1`;
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
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
        <div className="SearchEngine">
        <form onSubmit={handleSubmit}>
            <div className="container">
            <div className="row">
                <div className="col-10">
                <span class="input-group mb-3">
                <input
                type="search" placeholder="search for a city"
                className="form-control" onChange={handleCityChange} />
                <button type="submit" className="btn btn-outline-secondary">🔍</button>
                </span>
                </div>
                <div className="col-2 CurrentLocation">  
                <button className="btn btn-outline-secondary" type="button">current</button>  
                </div>
            </div>
            </div>
        </form>
        <WeatherInfo data={weatherData} />
        <Forecast data={weatherData}/>
        </div>
        );
        

    } else {
        search();
        return `Loading...`
    }
}