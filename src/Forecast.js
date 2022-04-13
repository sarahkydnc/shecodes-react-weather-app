import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";

import ForecastDay from "./ForecastDay";

function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function processForecast() {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;

    const unitAPI = `metric`;
    const keyAPI = `b234ec4305478a96889b3ecb891640e3`;
    const urlAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${keyAPI}&units=${unitAPI}`;
    axios.get(urlAPI).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="weather-forecast px-2">
        <p className="subtitle fs-5">
          Here's your <strong>FORECAST:</strong>
        </p>

        <div className="forecast-days container-fluid" id="forecast">
          <div className="divider mt-4 mb-2"></div>

          <div>
            {forecastData.map(function (dailyForecast, index) {
              if (index < 7) {
                return (
                  <div className="row" key={index}>
                    <ForecastDay data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    processForecast();
    return <div className="text-warning">Loading...</div>;
  }
}

export default Forecast;
