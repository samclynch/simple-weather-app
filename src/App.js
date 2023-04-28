import React, { useState } from 'react'
import './App.css'

function App() {

    const apiKey = 'e8e84fe0191aa92040436846af166133'
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")

    const getWeather = (event) => {
        if (event.key == "Enter"){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`).then(
                response => response.json()
            ).then(
                data => {
                    setWeatherData(data)
                    setCity("")
                }
            )
        }
    }
  return (

    <div className='container'>
        <h1>Sam's Simple Weather App</h1>
    <input 
        className='input'
        placeholder='Enter City...'
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyDown={getWeather}
        />

        {typeof weatherData.main == 'undefined' ? (
            <div>
                <p>Welcome to the Weather App! Enter in a city to get the weather. </p>
            </div>
        ): (
            <div className='weather-data'>
                <p className='city'>{weatherData.name}</p>
                <p className='temp'>{Math.round(weatherData.main.temp)} °F</p>
                <p className='weather'>{weatherData.weather[0].main}</p>

            </div>
        )}

        {weatherData.cod == "404" ? (
            <p>City not found.</p>
        ):(
            <>
            </>
        )}
    </div>

  )
}

export default App