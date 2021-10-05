import "./App.css";
import React, { useEffect, useState } from "react";
import Loading from "./components/loading";
import Weather from "./components/Weather";
import Chart from "./components/Chart";
import Map from "./components/map/Map";
import FancyCard from "./components/card/FancyCard";

function App() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [daily, setDaily] = useState(null);

    let getWeatherData = async () => {
        setLoading(true);
        const response = await fetch(
            "https://api.openweathermap.org/data/2.5/onecall?lat=17.33&lon=70&units=metric&appid=cd6e6035e1d85faa5b5262ca208b28bd"
        );
        const parsedData = await response.json();
        console.log(parsedData);
        setData(parsedData);
        setLoading(false);
        let xAxis = [];
        let yAxis = [];
        for (var eachDay of parsedData.daily) {
            let d = new Date(eachDay.dt * 1000).toUTCString();
            yAxis.push(eachDay.temp.max);
            xAxis.push(d.slice(0, 11));
        }
        setDaily({ xAxis, yAxis });
    };

    useEffect(() => {
        getWeatherData();
    }, []);
    return (
        <>
            <div className="App">
                {loading || !daily || !data? (
                    <Loading />
                ) : (
                    <div>
                        <Weather
                            description = {data.current.weather[0].description}
                            temp={data.current.temp}
                            main={data.current.weather[0].main}
                            icon={data.current.weather[0].icon}
                            daily={daily}
                        />
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
{/* <Map style="mapbox://styles/mapbox/streets-v8" /> */}
