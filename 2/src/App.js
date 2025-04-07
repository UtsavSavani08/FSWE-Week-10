import React, { useState } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'API_KEY';

  const fetchWeather = async (city) => {
    try {
      setError(null);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      const data = await response.json();
      
      if (data.cod !== 200) {
        throw new Error(data.message || 'Failed to fetch weather data');
      }
      
      setWeatherData(data);
    } catch (err) {
      setError('Unable to fetch weather data. Please check your internet connection and try again.');
      setWeatherData(null);
      console.error('Weather API Error:', err);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
