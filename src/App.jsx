import React, { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import Search from "./components/Search";
import { WEATHER_KEY, WEATHER_URL } from "./Api";
import Forecast from "./components/Forecast";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [country, setCountry] = useState(null)
  const handleSearch = (searchData) => {
    const [lat, long] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(`${WEATHER_URL}/weather?lat=${lat}&lon=${long}&appid=${WEATHER_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_URL}/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_KEY}&units=metric`);
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (res) => {
        const weatherRes = await res[0].json();
        const forecastRes = await res[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherRes });
        setForecast({ city: searchData.label, ...forecastRes });
        setCountry({city: searchData.country})
      })
      .catch((err) => console.log(err));
  };
  console.log(country)
  
  return (
    <div className="container">
      <Search onSearchChange={(searchData) => handleSearch(searchData)} data={country}/>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
};

export default App;


