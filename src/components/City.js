import React, { useState, useEffect } from "react";
import axios from "axios";
import { apikey } from "../index.js";

export const City = ({ match }) => {
  const { city, Name, Country } = match.params;
  const [cityDetails, setcityDetails] = useState([
    {
      Temperature: { Metric: { Value: "" } },
      RealFeelTemperature: { Metric: { Value: "" } },
      Visibility: { Metric: { Value: "" } },
      Pressure: { Metric: { Value: "" } },
      Wind: { Speed: { Metric: { Value: "" } } },
      RelativeHumidity: "",
      IndoorRelativeHumidity: "",
      WeatherText: "",
      WeatherIcon: "",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    localStorage.setItem("city", city);
    localStorage.setItem("name", Name);
    localStorage.setItem("country", Country);
    setIsLoading(true);
    axios
      .get(
        `http://dataservice.accuweather.com/currentconditions/v1/${city}?apikey=${apikey}&details=true`
      )
      .then((response) => {
        setcityDetails(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, [city, Name, Country]);

  return (
    <section className="ajax-section">
      <div className="container">
        {isError ? (
          <div>Something went wrong ...</div>
        ) : (
          <ul className="cities">
            <li className="city">
              <h2 className="city-name">
                <span>{Name}</span>
                <sup>{Country}</sup>
              </h2>
              <div className="city-temp">
                {isLoading ? (
                  <div>Loading ...</div>
                ) : (
                  <div>
                    {cityDetails[0].Temperature.Metric.Value}
                    <sup>°C</sup>
                  </div>
                )}
              </div>
              {isLoading ? (
                <div></div>
              ) : (
                <figure>
                  <img
                    className="city-icon"
                    src={
                      "https://developer.accuweather.com/sites/default/files/" +
                      (cityDetails[0].WeatherIcon.toString().length === 1
                        ? "0" + cityDetails[0].WeatherIcon
                        : cityDetails[0].WeatherIcon) +
                      "-s.png"
                    }
                    alt={cityDetails[0].WeatherText}
                  ></img>
                  <figcaption>{cityDetails[0].WeatherText}</figcaption>
                </figure>
              )}
              <div className="details">
                <div>
                  {isLoading ? (
                    <div></div>
                  ) : (
                    <div className="city-detail">
                      RealFeel®{" "}
                      <span>
                        {cityDetails[0].RealFeelTemperature.Metric.Value}
                      </span>{" "}
                      °C
                    </div>
                  )}
                </div>
                <div>
                  {isLoading ? (
                    <div></div>
                  ) : (
                    <div className="city-detail">
                      Wind NNE{" "}
                      <span>{cityDetails[0].Wind.Speed.Metric.Value}</span> km/h
                    </div>
                  )}
                </div>
                <div>
                  {isLoading ? (
                    <div></div>
                  ) : (
                    <div className="city-detail">
                      Pressure{" "}
                      <span>{cityDetails[0].Pressure.Metric.Value}</span> mb
                    </div>
                  )}
                </div>
                <div>
                  {isLoading ? (
                    <div></div>
                  ) : (
                    <div className="city-detail">
                      Visibility{" "}
                      <span>{cityDetails[0].Visibility.Metric.Value}</span> km
                    </div>
                  )}
                </div>
                <div>
                  {isLoading ? (
                    <div></div>
                  ) : (
                    <div className="city-detail">
                      Humidity <span>{cityDetails[0].RelativeHumidity}</span>%
                    </div>
                  )}
                </div>
                <div>
                  {isLoading ? (
                    <div></div>
                  ) : (
                    <div className="city-detail">
                      Indoor Humidity{" "}
                      <span>{cityDetails[0].IndoorRelativeHumidity}</span>%
                    </div>
                  )}
                </div>
              </div>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};
