import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Loading from "../../components/loading";
import "../../App.css";

function Map() {
    const [viewport, setViewport] = useState({
        latitude: 17.387,
        longitude: 78.486,
        width: "80vw",
        height: "95vh",
        zoom: 10,
    });

    const [citiesData, setCitiesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const getAllCitiesData = async () => {
        setLoading(true);
        const response = await fetch(
            "https://dataservice.accuweather.com/currentconditions/v1/topcities/150?apikey=jVT1jG9DlSdYmaLFh1i372lgnBvGc0Ah"
        );
        const data = await response.json();
        // console.log(data)
        setCitiesData(data);
        setLoading(false);
    };

    useEffect(() => {
        getAllCitiesData();
    }, []);
    return (
        <>
            {!loading ? (
                <div>
                    <ReactMapGL
                        mapboxApiAccessToken="pk.eyJ1IjoiYWJkdWxrYXJlZW1qcyIsImEiOiJja3U1YWplZnIzaGpjMm9xdDQxbXQyNW4yIn0.Odse6gpOgIBfxag6egTxqw"
                        {...viewport}
                        mapStyle="mapbox://styles/mapbox/streets-v11"
                        onViewportChange={(viewport) => setViewport(viewport)}
                    >
                        {citiesData.map((city, index) => (
                            <div key={index}>
                                <Marker
                                    onClick={(city) => setShowPopup(true)}
                                    key={index}
                                    latitude={city.GeoPosition.Latitude}
                                    longitude={city.GeoPosition.Longitude}
                                >
                                    <div>
                                        <img
                                            style={{ cursor: "pointer" }}
                                            src={`/weather-icons/${city.WeatherIcon}-s.png`}
                                            alt={city.WeatherText}
                                            width={viewport.zoom * 15}
                                        />
                                    </div>
                                </Marker>
                                {showPopup && (
                                    <Popup
                                        latitude={city.GeoPosition.Latitude}
                                        longitude={city.GeoPosition.Longitude}
                                        closeButton={true}
                                        closeOnClick={false}
                                        onClose={() => setShowPopup(false)}
                                        anchor="top"
                                    >
                                        <div>You are here</div>
                                    </Popup>
                                )}
                            </div>
                        ))}
                    </ReactMapGL>
                </div>
            ) : null}
        </>
    );
}

export default Map;
