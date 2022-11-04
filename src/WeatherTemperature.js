import React, { useState } from "react";
import './Weather.css';

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    
    if (unit === "celsius") {
        return (
        <span>
            <span className="Degree">{props.celsius}</span>
            <span className="Units">
                <span className="Celsius">
                    ºC{" "}|{" "}
                </span>
                <span className="Fahrenheit">
                    <a href="/" onClick={showFahrenheit}>ºF</a>
                </span>
            </span>
        </span>
    );    
    } else {
        let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
        return (
        <span>
            <span className="Degree">{fahrenheit}</span>
            <span className="Units">
                <span className="Celsius">
                    <a href="/" onClick={showCelsius}>ºC</a>{" "}|{" "}
                </span>
                <span className="Fahrenheit">ºF
                </span>
            </span>
        </span>
        );
    }
}