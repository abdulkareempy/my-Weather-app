import React from "react";
import Chart from "./Chart";
import FancyCard from "./card/FancyCard";
import "../App.css";
// import from ""
function Weather(props) {
    return (
        <>
            <div className="weather-container">
                <div className="fancyCard-wrapper">
                    <FancyCard props={props} />
                </div>
                <div className="chart-wrapper">
                    <Chart dailyData={props.daily} />
                </div>
            </div>
        </>
    );
}

export default Weather;
{
}
