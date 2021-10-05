import React from "react";
import "./card.css";

function FancyCard({ props }) {
    console.log("received this in fancy Card", props);
    return (
        <div className="fancy-card">
            <div className="icon">
                <img
                    src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
                    alt="weather icon"
                />
            </div>
            <div className="content">
                <h1 className="city">Weather App</h1>
                <h1 className="temp">
                    {props.temp}
                    <sup>o</sup>C
                </h1>
                <h1 className="desc">{props.description}</h1>
            </div>
        </div>
    );
}

export default FancyCard;
