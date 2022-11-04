import React from "react";
import './Forecast.css'
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
  console.log(response.data);
  }
  let lon = `props.coordinates.longitude`;
  let lat = `props.coordinates.latitude`;
  let apiKey = `406acc31e3t70db95bde98ef0co5dbb1`;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

    return <div className="Forecast">
    <div className="row">
    <div className="col">
      <div className="ForecastDate">mon</div>
      
        <div className="ForecastTemperature">
          <span className="ForecastMax">21°</span>
          <span className="forecastMin">17°</span>
        </div>
    </div>
    </div>
    </div>
}